import { Link, useOutletContext } from "react-router-dom";
import styles from "./NavComponent.module.css";

function NavComponent() {
  const [productsToCart, setProductsToCart] = useOutletContext();

  const amountOfProductsInCart = productsToCart.filter(
    (product) => product,
  ).length;

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <ul className={styles.navContent}>
          <li>
            <Link to="/">
              <img
                className={styles.storeLogo}
                src="./store-logo.svg"
                alt="clothing store logo"
              />
            </Link>
          </li>
          <li>
            <Link data-testid="home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link data-testid="products" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link data-testid="about" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link data-testid="cart" to="/products/cart">
              <div className={styles.amountOfProductsContainer}>
                <img
                  className={styles.navBarCart}
                  src="./shopping-cart.svg"
                  alt="clothing store shopping cart"
                />
                <div className={styles.amountItemsInCart}>
                  <p data-testid="products-amount">{amountOfProductsInCart}</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavComponent;
