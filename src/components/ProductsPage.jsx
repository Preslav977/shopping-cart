import styles from "./ProductsPage.module.css";

function ProductsPage({ productInformation }) {
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
      {/* <div className={styles.productsContainer}>
        {array.map((obj) => (
          <div className={styles.productsContent} key={obj}>
            <div className={styles.productsImgContainer}>
              <img
                className={styles.productsImg}
                src={productInformation.ImgSrc}
                alt=""
              />
            </div>
            <div className={styles.productsDescription}>
              <p>{productInformation.name}</p>
              <p className={styles.productPrice}>{productInformation.price}</p>
              <div className={styles.productsRatingContainer}>
                <img src="" alt="" />
                <p></p>
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
        ))}
      </div> */}
    </main>
  );
}

export default ProductsPage;
