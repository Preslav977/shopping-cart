import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Homepage.module.css";

function Homepage({
  homePageHeader,
  homePageDesc,
  homePageMoreDesc,
  pathToProducts,
  pathToProductsName,
  homePageImgSrc,
  homePageImgAlt,
}) {
  return (
    <div>
      <main className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <h1>{homePageHeader}</h1>
          <div className={styles.mainContentDesc}>
            <p>{homePageDesc}</p>
          </div>
          <p>{homePageMoreDesc}</p>
          <div className={styles.buttonContainer}>
            <button>
              <Link to={pathToProducts}>{pathToProductsName}</Link>
            </button>
          </div>
        </div>
        <img
          className={styles.homePageImg}
          src={homePageImgSrc}
          alt={homePageImgAlt}
        />
      </main>
    </div>
  );
}

Homepage.propTypes = {
  homePageHeader: PropTypes.string,
  homePageDesc: PropTypes.string,
  homePageMoreDesc: PropTypes.string,
  pathToProducts: PropTypes.string,
  pathToProductsName: PropTypes.string,
  homePageImgSrc: PropTypes.string,
  homePageImgAlt: PropTypes.string,
};

export default Homepage;
