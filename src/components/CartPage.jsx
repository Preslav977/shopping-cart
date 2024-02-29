import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";
import { useOutletContext } from "react-router-dom";

function CartPage() {
  const [productsToCart, setProductsToCart] = useOutletContext();

  const allProductsQuantities = productsToCart.map(
    (product) => product.quantity,
  );

  const calculateAllProductsQuantities = allProductsQuantities.reduce(
    (a, b) => a + b,
    0,
  );

  const multiplyAllProductsQuantityAndPrice = productsToCart.map(
    (product) => product.quantity * product.price,
  );

  const calculateTheResultOfMultiplying =
    multiplyAllProductsQuantityAndPrice.reduce((a, b) => a + b, 0);

  const roundTheResultToTwoNumbers = calculateTheResultOfMultiplying.toFixed(2);

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

  function increaseProductQuantity(product) {
    setProductsToCart(
      productsToCart.map((productObj) => {
        if (productObj.id === product.id) {
          return { ...productObj, quantity: productObj.quantity + 1 };
        }
        return productObj;
      }),
    );
  }

  function decreaseProductQuantity(product) {
    setProductsToCart(
      productsToCart.map((productObj) => {
        if (productObj.id === product.id) {
          return { ...productObj, quantity: productObj.quantity - 1 };
        } else {
          return productObj;
        }
      }),
    );
  }

  return (
    <>
      <div className={styles.productsCartWrapper}>
        <div className={styles.productCartSubWrapper}>
          <div className={styles.productsCartContainer}>
            <p>Your shopping Cart</p>
            <p data-testid="product-items">
              {calculateAllProductsQuantities} items
            </p>
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
                    <button
                      data-testid="decrease-quantity"
                      onClick={() => decreaseProductQuantity(product)}
                      className={styles.buttonIncrementQuantity}
                    >
                      <span>-</span>
                    </button>
                    <input
                      className={styles.productQuantity}
                      data-testid="product-quantity"
                      type="number"
                      name=""
                      id=""
                      value={product.quantity}
                      onChange={() => console.log()}
                    />
                    <button
                      data-testid="increase-quantity"
                      onClick={() => increaseProductQuantity(product)}
                      className={styles.buttonDecrementQuantity}
                    >
                      <span>+</span>
                    </button>
                  </div>
                  <div>
                    <p>{product.price}$</p>
                  </div>
                  <div>
                    <button
                      data-testid="remove-product-btn"
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
            <p data-testid="total-price">{roundTheResultToTwoNumbers}$</p>
          </div>
          <div className={styles.btnPayContainer}>
            <button data-testid="checkout-button">Procced to Checkout </button>
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
