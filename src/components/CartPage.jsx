import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";

//click add to cart in order to show it to the cart
//useState which is an empty array, create copy of the products state
//which i haven't figured out yet, what state to use maybe the one
//which gets the API data ?
//if the cart is not empty show the product (img, title, description, input, price)
//and estimated total value and a button to proceed to checkut
//remove it form the cart and show home page maybe
//if the cart is empty show a message that it is ?

function CartPage() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const amountOfProducsInCart = shoppingCart.filter(
    (product) => product,
  ).length;

  if (shoppingCart.length === 0) {
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
      <div className={styles.cartItemsAmount}>
        <p>{amountOfProducsInCart}</p>
      </div>
      <div className={styles.productsCartWrapper}>
        <div className={styles.productCartSubWrapper}>
          <div className={styles.productsCartContainer}>
            <p>Your shopping Cart</p>
            <p>1 item</p>
          </div>
          <div className={styles.productsContent}>
            {shoppingCart.map((product) => (
              <div className={styles.productsAddedToCart} key={product}>
                <p>{product.name}</p>
                <div className={styles.productDescription}>
                  <div className={styles.productImgContainer}>
                    <img src="" alt="" />
                  </div>
                  <input
                    className={styles.productQuantity}
                    type="number"
                    name=""
                    id=""
                  />
                  <p>{product.price}</p>
                  <button>Remove</button>
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
