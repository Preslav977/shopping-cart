import styles from "./ProductsPage.module.css";

function ProductsPage({
  productImgSrc,
  productName,
  productPrice,
  productRating,
  productCount,
}) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.productsContainer}>
        <div className={styles.productsContent}>
          <div className={styles.productsImgContainer}>
            <img className={styles.productsImg} src={productImgSrc} alt="" />
          </div>
          <div className={styles.productsDescription}>
            <p>{productName}</p>
            <p className={styles.productPrice}>{productPrice}$</p>
            <div className={styles.productsRatingContainer}>
              <p>{productRating}</p>
              <span>/</span>
              <p>{productCount}</p>
            </div>
          </div>
          <div className={styles.productQuantityContainer}>
            <button className={styles.buttonIncrementQuantity}>
              <span>+</span>
            </button>
            <input min={1} type="number" name="" id="" />
            <button className={styles.buttonIncrementQuantity}>
              <span>-</span>
            </button>
          </div>
          <div className={styles.addToCartBtn}>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
