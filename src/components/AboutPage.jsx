import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <div>
          <img className={styles.aboutImg} src="./store.jpg" alt="" />
        </div>
        <p>This store is real, and the products are not fake.</p>
        <p>Products images and information is provided by FakeStore API.</p>
        <p>Home page background photo by charlesdeluvio on Unsplash.</p>
        <p>Home page store logo photo by Manny Becerra on Unsplash.</p>
      </div>
    </main>
  );
}

export default AboutPage;
