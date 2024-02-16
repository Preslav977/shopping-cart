import styles from "./ProductsPage.module.css";

function ProductsPage() {
  let array = [
    {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "25$",
      rating: "3.5",
    },
  ];

  return (
    <main className={styles.mainContainer}>
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
      <div className={styles.productsContainer}></div>
    </main>
  );
}

export default ProductsPage;
