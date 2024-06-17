import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerStoreLogo}>
          <img
            className={styles.footerStoreImg}
            src="./store-logo.jpg"
            alt="Store logo"
          />
        </div>
        <div className={styles.footerNavigationSvgs}>
          <div className={styles.footerUsefulLinks}>
            <h2>Useful Links</h2>
            <img className={styles.footerSvgs} src="./compass.svg" alt="" />
          </div>
          <li>
            <Link className={styles.homeLink} data-testid="footer-home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.productsLink}
              data-testid="footer-products"
              to="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className={styles.aboutLink}
              data-testid="footer-about"
              to="/about"
            >
              About
            </Link>
          </li>
        </div>
        <div className={styles.footerContactSection}>
          <h3 className={styles.contactUs}>Contact Us</h3>
          <div className={styles.locationContainer}>
            <p>Location</p>
            <img className={styles.footerSvgs} src="./map.svg" alt="" />
          </div>
          <p>Somewhere in EU</p>
          <div className={styles.phoneContainer}>
            <p>Phone</p>
            <img className={styles.footerSvgs} src="./phone.svg" alt="" />
          </div>
          <div className={styles.emailContainer}>
            <p>Email</p>
            <img className={styles.footerSvgs} src="./email.svg" alt="" />
          </div>
        </div>
        <div className={styles.socialNetworksContainer}>
          <h4>Social Networks</h4>
          <div>
            <img className={styles.footerSvgs} src="./facebook.svg" alt="" />
          </div>
          <div>
            <img className={styles.footerSvgs} src="./twitter.svg" alt="" />
          </div>
          <div>
            <img className={styles.footerSvgs} src="./instagram.svg" alt="" />
          </div>
          <div>
            <img className={styles.footerSvgs} src="./youtube.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
