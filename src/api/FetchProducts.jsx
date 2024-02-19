import { useState, useEffect } from "react";
import ProductsPage from "../components/ProductsPage";
import styles from "./FetchProducts.module.css";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  console.log(products);

  return (
    <>
      <div className={styles.mainContentHeader}>
        <h2>Shop</h2>
        <div className={styles.mainContentSubHeader}>
          <p>
            Home <span>&gt;</span>
          </p>
          <p>
            Products <span>&gt;</span>
          </p>
          <select
            className={styles.dropDownMenu}
            name=""
            id=""
            defaultValue="All"
          >
            <option value="All">All</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Men's Clothing">Men&apos;s Clothing</option>
            <option value="Women's Clothing">Women&apos;s Clothing</option>
          </select>
        </div>
      </div>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <ProductsPage
            key={product.id}
            productImgSrc={product.image}
            productName={product.title}
            productPrice={product.price}
            productRating={product.rating.rate}
            productCount={product.rating.count}
          />
        ))}
      </div>
    </>
  );
};

export default FetchProducts;
