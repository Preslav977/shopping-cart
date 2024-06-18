import styles from "./HomePageFlexSectionOne.module.css";

function HomePageFlexSectionOne() {
  return (
    <section className={styles.homePageSectionOneContainer}>
      <div className={styles.homePageSectionOneContentLeft}>
        <div className={styles.homePageSectionOneContentParagraph}>
          <p>Unleash their power. Unleash yours.</p>
          <p className={styles.homePageSectionOneContentSecondParagraph}>
            BEST CLOTHES QUALITY.
          </p>
          <div className={styles.homePageSectionOneBorder}></div>
        </div>
      </div>
      <div className={styles.homePageSectionOneContentRight}></div>
      <div className={styles.homePageSectionOneImageContainer}>
        <img
          className={styles.homePageSectionOneImage}
          src="./store-one.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default HomePageFlexSectionOne;
