import { Link } from "react-router-dom";

import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div>
      <main className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <h1>Welcome to Excalibur Clothing Store</h1>
          <div className={styles.mainContentDesc}>
            <p>
              Start shopping now, by clicking the button and see all the
              available products in the store
            </p>
          </div>
          <p>Why wait for tomorrow, when you can do this now!</p>
          <div className={styles.buttonContainer}>
            <button>
              <Link to="/products">Show Now</Link>
            </button>
          </div>
        </div>
        <img
          className={styles.homePageImg}
          src="./store.jpg"
          alt="Store Image"
        />
      </main>
    </div>
  );
}

export default Homepage;
