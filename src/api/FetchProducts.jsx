import { useState, useEffect } from "react";
import ProductsPage from "../components/ProductsPage";
import HeaderProductsPage from "../components/HeaderProductsPage";
import styles from "./FetchProducts.module.css";
import { useOutletContext } from "react-router-dom";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  products.map((product) => (product.quantity = 1));
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsToCart, setProductsToCart] = useOutletContext();

  //added quantity property to all products
  //so it would be easier to update the property of each product

  function addProductsToCart(product) {
    setProductsToCart([...productsToCart, product]);
  }

  function addQuantityPropertyToProducts() {
    // products.map((product) => (product.quantity = 1));
  }

  function increaseProductQuantity(product) {
    setProducts(
      products.map((productObj) => {
        if (productObj.id === product.id) {
          return { ...productObj, quantity: productObj.quantity + 1 };
        } else {
          return productObj;
        }
      }),
    );
  }

  function onChange(e) {
    setProducts(e.target.value);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })

      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <HeaderProductsPage />
      <div
        data-test-id="products-container"
        className={styles.productsContainer}
      >
        {products.map((product) => (
          <ProductsPage
            key={product.id}
            productImgSrc={product.image}
            productName={product.title}
            productPrice={product.price}
            productRating={product.rating.rate}
            productCount={product.rating.count}
            quantity={product.quantity}
            onClick={() => {
              // addQuantityPropertyToProducts();
              increaseProductQuantity(product);
            }}
            onChange={(e) => onChange(e.target.value)}
          />
        ))}
      </div>
    </>
  );
};

export default FetchProducts;
