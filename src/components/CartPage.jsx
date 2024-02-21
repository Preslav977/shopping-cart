import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";
import { useOutletContext } from "react-router-dom";

function CartPage() {
  const [productsToCart, setProductsToCart] = useOutletContext();

  if (productsToCart.length === 0) {
    return (
      <div className={styles.emptyCartContainer}>
        <div className={styles.emptyCartContent}>
          <div className={styles.emptyCartSubContent}>
            <p>Your cart is empty ! </p>
            <p>Click the button to start shopping !</p>
            <div className={styles.btnShopNowContainer}>
              <button data-testid="button" className={styles.btnShopNow}>
                <Link to="/products">Shop Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.productsCartWrapper}>
        <div className={styles.productCartSubWrapper}>
          <div className={styles.productsCartContainer}>
            <p>Your shopping Cart</p>
            <p>1 item</p>
          </div>
          <div className={styles.productsContent}>
            {productsToCart.map((product) => (
              <div className={styles.productsAddedToCart} key={product.id}>
                <p>{product.title}</p>
                <div className={styles.productDescription}>
                  <div className={styles.productImgContainer}>
                    <img
                      className={styles.productImg}
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className={styles.productQuantityContainer}>
                    <button className={styles.buttonIncrementQuantity}>
                      <span>+</span>
                    </button>
                    <input
                      className={styles.productQuantity}
                      type="number"
                      name=""
                      id=""
                      min={1}
                    />
                    <button className={styles.buttonDecrementQuantity}>
                      <span>-</span>
                    </button>
                  </div>
                  <div>
                    <p>{product.price}$</p>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        setProductsToCart(
                          productsToCart.filter((a) => a.id !== product.id),
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.estimatedPriceContainer}>
          <div className={styles.estimatedTotal}>
            <p>Estimated Total</p>
            <p>22.30 $</p>
          </div>
          <div className={styles.btnPayContainer}>
            <button>Procced to Checkout </button>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
