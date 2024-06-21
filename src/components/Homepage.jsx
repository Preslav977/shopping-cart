import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import HomepageSection from "./HomepageSection";
import HomePageFlexSection from "./HomepageFlexSection";
import HomepageDescriptionSection from "./HomepageDescriptionSection";

function Homepage() {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.mainContentLeft}>
          <h2 className={styles.mainContentHeader}>
            <span className={styles.mainContentHeaderSpan}>Check our</span>
            collection of{" "}
            <span className={styles.mainContentHeaderSpan}> products</span>
          </h2>
          <div className={styles.mainContentDescription}>
            <p>Step into the world of clothes.</p>
            <p className={styles.mainContentParagraph}>
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
                className={styles.shoppingArrowSVG}
                src="./arrow.svg"
                alt="shopping arrow"
              />
            </div>
          </div>
        </div>
        <div className={styles.mainContentRight}>
          <img
            className={styles.clothingStoreImg}
            src="./store.jpg"
            alt="clothing store image"
          />
        </div>
      </main>
      <hr />
      <HomepageSection />
      <hr />
      <HomePageFlexSection />
      <hr />
      <HomepageDescriptionSection />
    </>
  );
}

export default Homepage;
