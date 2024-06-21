import styles from "./ProductsPage.module.css";
import PropTypes from "prop-types";

function ProductsPage({
  productImgSrc,
  productName,
  productPrice,
  productRating,
  productCount,
  productQuantity,
  onClick,
  increaseQuantity,
  decreaseQuantity,
  onChange,
}) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.productsContainer}>
        <div data-testid="container" className={styles.productsContent}>
          <div className={styles.productsImgContainer}>
            <img
              className={styles.productsImg}
              src={productImgSrc}
              alt="product image"
            />
          </div>
          <div className={styles.productsDescription}>
            <p className={styles.productName}>{productName}</p>
            <p data-testid="price" className={styles.productPrice}>
              {productPrice}$
            </p>
            <div className={styles.productsRatingContainer}>
              <p data-testid="rating">{productRating}</p>
              <span className={styles.productRatingSlash}>/</span>
              <p data-testid="count">{productCount}</p>
            </div>
          </div>
          <div className={styles.addToCartBtnContainer}>
            <button
              className={styles.addToCartBtn}
              data-testid="add-to-cart"
              onClick={onClick}
            >
              Add to Cart
            </button>
          </div>
          <div className={styles.productQuantityContainer}>
            <button
              data-testid="decrease-quantity"
              onClick={decreaseQuantity}
              className={styles.buttonIncrementQuantity}
            >
              <span>-</span>
            </button>
            <input
              className={styles.productQualityInput}
              data-testid="product-quantity"
              type="number"
              name="number"
              id="number"
              inputMode="numeric"
              value={productQuantity}
              onChange={onChange}
            />
            <button
              data-testid="increase-quantity"
              onClick={increaseQuantity}
              className={styles.buttonIncrementQuantity}
            >
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

ProductsPage.propTypes = {
  productImgSrc: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productRating: PropTypes.number,
  productCount: PropTypes.number,
  onClick: PropTypes.func,
  productQuantity: PropTypes.number,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
  onChange: PropTypes.func,
};

export default ProductsPage;
