import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className={styles.navbarContainer}>
        <ul>
          <li>
            <Link to="/">
              <img
                className={styles.storeLogo}
                src="./store-logo.jpg"
                alt="Store logo"
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
                alt="Cart"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
