import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContentLeft}>
          <img
            className={styles.footerContentLeftLogo}
            src="./store-logo-footer.svg"
            alt="clothing store logo"
          />
          <p data-testid="footer-paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            magni ut sit, veniam magnam nesciunt corporis neque aliquam earum
            facere repudiandae itaque exercitationem accusamus provident nemo
            quasi! Modi, amet iste.
          </p>
        </div>
        <div className={styles.footerContentRight}>
          <div className={styles.footerRightColumnOne}>
            <h6 className={styles.footerRightColumnHeader}>Shop</h6>
            <Link>Jewelery</Link>
            <Link>Mens Clothing</Link>
            <Link>Womens Clothing</Link>
            <Link>Electronics</Link>
          </div>
          <div className={styles.footerRightColumnTwo}>
            <h6 className={styles.footerRightColumnHeader}>Useful Links</h6>
            <Link data-testid="footer-home" to="/">
              Home
            </Link>
            <Link data-testid="footer-products" to="/products">
              Products
            </Link>
            <Link data-testid="footer-cart" to="/products/cart">
              Cart
            </Link>
            <Link data-testid="footer-about" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
