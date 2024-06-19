import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentLeft}>
        <img className={styles.footerLogo} src="./store-logo.svg" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          magni ut sit, veniam magnam nesciunt corporis neque aliquam earum
          facere repudiandae itaque exercitationem accusamus provident nemo
          quasi! Modi, amet iste.
        </p>
      </div>
      <div className={styles.footerContentRight}>
        <div className={styles.footerRightColumnOne}>
          <h4>Shop</h4>
          <Link>Jewelery</Link>
          <Link>Mens Clothing</Link>
          <Link>Womens Clothing</Link>
          <Link>Electronics</Link>
        </div>
        <div className={styles.footerRightColumnTwo}>
          <h4>Useful Links</h4>
          <Link>Home</Link>
          <Link>Products</Link>
          <Link>Cart</Link>
          <Link>About</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
