import styles from "./HeaderProductsPage.module.css";

function HeaderProductsPage() {
  return (
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
  );
}

export default HeaderProductsPage;
