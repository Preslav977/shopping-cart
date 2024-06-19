import styles from "./HeaderProductsPage.module.css";
import PropTypes from "prop-types";

function HeaderProductsPage({ onChange, value }) {
  return (
    <div className={styles.mainContentHeader}>
      <h2 className={styles.shop}>Shop</h2>
      <div className={styles.mainContentSubHeader}>
        <p className={styles.mainContentParagraph}>
          Home <span>&gt;</span>
        </p>
        <p
          className={styles.mainContentParagraph}
          data-testid="products-select"
        >
          Products <span className={styles.mainContentSpan}>&gt;</span>
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

HeaderProductsPage.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default HeaderProductsPage;
