import styles from "./HomepageSection.module.css";
import { Link } from "react-router-dom";

function HomepageSection() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionContentLeft}>
        <div className={styles.sectionImageContainer}>
          <img
            className={styles.sectionImage}
            src="./fake-store-api.svg"
            alt="fake store API svg"
          />
        </div>
        <div className={styles.sectionButtonContainer}>
          <Link className={styles.sectionButton} to="/products">
            Meet the new age
          </Link>
        </div>
      </div>
      <div className={styles.sectionContentRight}>
        <h3 className={styles.sectionContentRightHeader}>
          Clothes are the{" "}
          <strong className={styles.sectionContentRightHeaderStrong}>
            new age
          </strong>
          .
        </h3>
        <div className={styles.sectionContentRightDescription}>
          <p
            data-testid="homepage-paragraph"
            className={styles.sectionContentRightParagraph}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            elementum, nisl nec dictum vehicula, sapien metus convallis nisi, in
            tristique velit nulla tempor tortor. Ut vitae orci id purus
            efficitur viverra quis ut purus. Ut posuere vel augue a aliquet.
            Integer at erat lobortis, bibendum ex vitae, volutpat eros.
            Suspendisse euismod placerat nisi quis maximus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Mauris volutpat pharetra malesuada. Cras non nisl
            imperdiet, posuere nunc quis, lobortis dui. Fusce mollis bibendum
            libero in ultrices. Nulla vulputate ullamcorper diam eget eleifend.
            Nulla id vehicula quam. Suspendisse dui justo, aliquam finibus
            lacinia eu, porta eget turpis.
          </p>
          <p>
            Quisque condimentum tempor cursus. Nulla nunc massa, porta a
            venenatis in, ornare at arcu. Nam pharetra, dolor id suscipit
            semper, nisl tellus lacinia ligula, et sollicitudin nibh lorem eget
            metus. Donec in aliquam tellus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomepageSection;
