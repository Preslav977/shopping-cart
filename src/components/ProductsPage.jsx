import styles from "./ProductsPage.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

function ProductsPage({
  productImgSrc,
  productName,
  productPrice,
  productRating,
  productCount,
  quantity,
  onClick,
  onChange,
}) {
  const [toggle, setToggle] = useState(true);

  function toggleBtnToInput() {
    setToggle((toggle) => !toggle);
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.productsContainer}>
        <div data-testid="container" className={styles.productsContent}>
          <div className={styles.productsImgContainer}>
            <img className={styles.productsImg} src={productImgSrc} alt="" />
          </div>
          <div className={styles.productsDescription}>
            <p>{productName}</p>
            <p data-testid="price" className={styles.productPrice}>
              {productPrice}$
            </p>
            <div className={styles.productsRatingContainer}>
              <p data-testid="rating">{productRating}</p>
              <span>/</span>
              <p data-testid="count">{productCount}</p>
            </div>
          </div>
          {toggle ? (
            <div data-testid="add-to-cart" className={styles.addToCartBtn}>
              <button
                onClick={() => {
                  onClick(), toggleBtnToInput();
                }}
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <div className={styles.productQuantityContainer}>
              <button className={styles.buttonIncrementQuantity}>
                <span>-</span>
              </button>
              <input
                type="number"
                name=""
                id=""
                value={quantity}
                onChange={onChange}
              />
              <button
                onClick={onClick}
                className={styles.buttonIncrementQuantity}
              >
                <span>+</span>
              </button>
            </div>
          )}
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
  // productQuantity: PropTypes.number,
};

export default ProductsPage;
