import { useState, useEffect } from "react";
import ProductsPage from "../components/ProductsPage";
import HeaderProductsPage from "../components/HeaderProductsPage";
import styles from "./FetchProducts.module.css";
import { useOutletContext } from "react-router-dom";
import NavComponent from "../components/NavComponent";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsToCart, setProductsToCart] = useOutletContext();
  const [selectOptions, setSelectOptions] = useState(
    "All",
    "Jewelery",
    "Mens Clothing",
    "Womens Clothing",
    "Electronics",
  );

  function addProductsToCart(product) {
    if (
      !productsToCart.some((productObject) => productObject.id === product.id)
    ) {
      setProductsToCart([...productsToCart, product]);
    }
  }

  function increaseProductQuantity(product) {
    setFilteredProducts(
      filteredProducts.map((productObj) => {
        console.log(productObj);
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
    setFilteredProducts(
      filteredProducts.map((productObj) => {
        if (productObj.id === product.id && product.quantity !== 1) {
          return { ...productObj, quantity: productObj.quantity - 1 };
        } else {
          return productObj;
        }
      }),
    );

    setProductsToCart(
      productsToCart.map((productObj) => {
        if (productObj.id === product.id && product.quantity !== 1) {
          return { ...productObj, quantity: productObj.quantity - 1 };
        } else {
          return productObj;
        }
      }),
    );
  }

  function filterProductsByCategory(e) {
    const event = e.target.value;
    const filterProducts = products.filter((obj) =>
      obj.category.includes(event),
    );
    setFilteredProducts(filterProducts);
    if (event === "all") {
      setFilteredProducts(products);
    }
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
      setFilteredProducts(allProducts);
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
      <NavComponent />
      <HeaderProductsPage
        value={selectOptions}
        onChange={(e) => {
          setSelectOptions(e.target.value);
          filterProductsByCategory(e);
        }}
      />
      <div
        data-test-id="products-container"
        className={styles.productsContainer}
      >
        {filteredProducts.map((product) => (
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
            onChange={() => console.log()}
          />
        ))}
      </div>
    </>
  );
};

export default FetchProducts;
