import styles from "./HomepageFlexSection.module.css";

function HomePageFlexSection() {
  return (
    <section className={styles.sectionFlexContainer}>
      <div className={styles.sectionFlexContentLeft}>
        <div className={styles.sectionFlexContentDescription}>
          <p className={styles.sectionFlexContentParagraph}>
            Unleash their power. Unleash yours.
          </p>
          <h4 className={styles.sectionFlexContentHeader}>
            BEST CLOTHES{" "}
            <strong className={styles.sectionFlexContentStrong}>QUALITY</strong>
            .
          </h4>
          <div className={styles.sectionFlexContentBorder}></div>
        </div>
      </div>
      <div className={styles.sectionFlexContentRight}></div>
      <div className={styles.sectionFlexContentRightImageContainer}>
        <img
          className={styles.sectionFlexContentRightImage}
          src="./store-one.jpg"
          alt="clothing store image"
        />
      </div>
    </section>
  );
}

export default HomePageFlexSection;
