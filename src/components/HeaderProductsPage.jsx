import styles from "./HeaderProductsPage.module.css";
import PropTypes from "prop-types";

function HeaderProductsPage({ onChange, value }) {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.mainContentHeader}>Shop</h2>
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
          name="select"
          id="select"
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
    </section>
  );
}

HeaderProductsPage.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default HeaderProductsPage;
