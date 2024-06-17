import { Link } from "react-router-dom";
import styles from "./NavComponent.module.css";

function NavComponent() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <ul className={styles.navContent}>
          <li>
            <Link to="/">
              <img
                className={styles.storeLogo}
                src="./store-logo.jpg"
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
              <img
                className={styles.navBarCart}
                src="./shopping-cart.svg"
                alt="clothing store shopping cart"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavComponent;
