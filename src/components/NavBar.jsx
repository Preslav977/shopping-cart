import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./NavBar.module.css";

function NavBar({
  homePathLogo,
  homePathImgSrc,
  homePathImgAlt,
  homePath,
  homePathName,
  productsPath,
  productsPathName,
  aboutPath,
  aboutPathName,
  cartPath,
  cartPathImgSrc,
  cartPathImgAlt,
}) {
  return (
    <nav className={styles.navbarContainer}>
      <ul>
        <li>
          <Link to={homePathLogo}>
            <img
              className={styles.storeLogo}
              src={homePathImgSrc}
              alt={homePathImgAlt}
            />
          </Link>
        </li>
        <li>
          <Link to={homePath}>{homePathName}</Link>
        </li>
        <li>
          <Link to={productsPath}>{productsPathName}</Link>
        </li>
        <li>
          <Link to={aboutPath}>{aboutPathName}</Link>
        </li>
        <li>
          <Link to={cartPath}>
            <img
              className={styles.navBarCart}
              src={cartPathImgSrc}
              alt={cartPathImgAlt}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

NavBar.PropTypes = {
  homePathLogo: PropTypes.string,
  homePathImgSrc: PropTypes.object,
  homePathImgAlt: PropTypes.string,
  homePath: PropTypes.string,
  homePathName: PropTypes.string,
  productsPath: PropTypes.string,
  productsPathName: PropTypes.string,
  aboutPath: PropTypes.string,
  aboutPathName: PropTypes.string,
  cartPath: PropTypes.string,
  cartPathImgSrc: PropTypes.object,
  cartPathImgAlt: PropTypes.string,
};

export default NavBar;
