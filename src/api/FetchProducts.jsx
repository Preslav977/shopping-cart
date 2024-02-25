import { useState, useEffect } from "react";
import ProductsPage from "../components/ProductsPage";
import HeaderProductsPage from "../components/HeaderProductsPage";
import styles from "./FetchProducts.module.css";
import { useOutletContext } from "react-router-dom";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsToCart, setProductsToCart] = useOutletContext();

  function addProductsToCart(product) {
    if (
      !productsToCart.some((productObject) => productObject.id === product.id)
    ) {
      setProductsToCart([...productsToCart, product]);
    }
  }

  function increaseProductQuantity(product) {
    setProducts(
      products.map((productObj) => {
        if (productObj.id === product.id) {
          return { ...productObj, quantity: productObj.quantity + 1 };
        }
        return productObj;
      }),
    );

    setProductsToCart(
      productsToCart.map((productObj) => {
        if (productObj.id === product.id) {
          return { ...productObj, quantity: productObj.quantity + 1 };
        }
        return productObj;
      }),
    );
  }

  function decreaseProductQuantity(product) {
    setProducts(
      products.map((productObj) => {
        if (productObj.id === product.id) {
          return { ...productObj, quantity: productObj.quantity - 1 };
        } else {
          return productObj;
        }
      }),
    );

    setProductsToCart(
      productsToCart.map((productObj) => {
        if (productObj.id === product.id) {
          return { ...productObj, quantity: productObj.quantity - 1 };
        }
        return productObj;
      }),
    );
  }

  const url = "https://fakestoreapi.com/products";

  const fetchProducts = async () => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();

      if (response.error >= 400) {
        throw new Error("server error");
      }

      const allProducts = data.map((products) => {
        return {
          ...products,
          quantity: 1,
        };
      });

      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts()
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
            productQuantity={product.quantity}
            onClick={() => addProductsToCart(product)}
            increaseQuantity={() => increaseProductQuantity(product)}
            decreaseQuantity={() => decreaseProductQuantity(product)}
          />
        ))}
      </div>
    </>
  );
};

export default FetchProducts;
