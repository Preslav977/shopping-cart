import { Link } from "react-router-dom";
import NavComponent from "./NavComponent";

import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <NavComponent />
      <main className={styles.mainContainer}>
        <div className={styles.mainContentSubContainerLeft}>
          <h2 className={styles.mainContentHeader}>
            <span className={styles.mainContentSpan}>Check our</span>
            collection of{" "}
            <span className={styles.mainContentSpan}> products</span>
          </h2>
          <div className={styles.mainContentDescription}>
            <p>Step into the world of clothes.</p>
            <p className={styles.mainContentThirdParagraph}>
              Experience immersive clothes quality like never before. Embrace
              the next level of clothes.
            </p>
          </div>
          <div className={styles.shoppingLinkContainer}>
            <div className={styles.shoppingLinkContent}>
              <Link className={styles.shoppingLink} to="/products">
                Start shopping{" "}
              </Link>
              <img
                className={styles.shoppingArrow}
                src="./arrow.svg"
                alt="shopping arrow"
              />
            </div>
          </div>
        </div>
        <div className={styles.mainContentSubContainerRight}>
          <img
            className={styles.clothingStoreImg}
            src="./store.jpg"
            alt="clothing store "
          />
        </div>
      </main>
    </>
  );
}

export default Homepage;
