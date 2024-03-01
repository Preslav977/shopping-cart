import styles from "./HeaderProductsPage.module.css";

function HeaderProductsPage({ onChange, value }) {
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
          value={value}
          onChange={onChange}
        >
          <option value="all">All</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men&apos;s Clothing</option>
          <option value="women's clothing">Women&apos;s Clothing</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
    </div>
  );
}

export default HeaderProductsPage;
