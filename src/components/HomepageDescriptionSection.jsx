import styles from "./HomepageDescriptionSection.module.css";

function HomepageDescriptionSection() {
  return (
    <section className={styles.sectionDescriptionContainer}>
      <h5 className={styles.sectionDescriptionHeader}>
        World-class{" "}
        <strong className={styles.sectionDescriptionStrong}>
          composable business.
        </strong>
      </h5>
      <div className={styles.sectionDescriptionContent}>
        <div className={styles.sectionDescriptionContentLeft}>
          <p data-testid="homepage-description-paragraph">
            Quisque imperdiet nisl malesuada orci sodales cursus. Nunc laoreet
            vestibulum risus, quis rhoncus risus efficitur semper. Proin dapibus
            massa quam, a gravida urna lobortis a. Integer faucibus diam eget
            urna pharetra aliquet. Duis cursus dui sit amet massa dapibus,
            sagittis iaculis libero semper. Vivamus ac accumsan sapien, nec
            condimentum erat. Praesent placerat vitae nulla in pellentesque.
            Proin et urna vel libero sodales pulvinar a nec metus. Praesent eget
            odio non eros fringilla tempor quis at diam. Quisque vestibulum
            hendrerit elit, quis sagittis leo tempor pellentesque. Nulla mauris
            ligula, malesuada ac lobortis non, finibus eget quam. Nam enim
            mauris, commodo vitae iaculis et, ultricies ac urna. Pellentesque
            eget quam in urna consectetur sollicitudin et blandit urna.
            Suspendisse malesuada dignissim consequat.
          </p>
          <p>
            In semper libero vel rhoncus maximus. Cras diam arcu, ultricies et
            cursus at, imperdiet nec leo. Praesent tempor magna ante. Integer
            elementum pretium enim, ornare tempor nisi ullamcorper eu. Praesent
            convallis porta felis at egestas. Fusce at sodales nibh. Fusce
            dignissim, risus a laoreet sodales, orci justo rhoncus sapien, quis
            sollicitudin nibh eros sed purus. Integer lobortis feugiat sem.
          </p>
          <p>
            Aenean vitae lobortis dolor, sed molestie elit. Proin ac elit neque.
            Suspendisse ac dui sed diam feugiat sagittis. Phasellus maximus
            porttitor nunc sed hendrerit. Vestibulum convallis, magna at egestas
            condimentum, dui ex dignissim leo, non lobortis libero elit mattis
            ante. Cras semper ut mi non pellentesque. Sed dignissim laoreet orci
            ut laoreet.
          </p>
        </div>
        <div className={styles.sectionDescriptionContentRight}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            fermentum ullamcorper libero, eu laoreet ligula iaculis sit amet.
            Proin euismod malesuada nisi, et convallis mauris faucibus et. Cras
            laoreet risus velit, eu sollicitudin est pharetra dapibus. Proin
            justo odio, finibus id quam eu, rutrum sagittis massa. Donec eu
            turpis massa. Proin in est eu enim semper cursus in eget dui.
            Aliquam tempor, dolor venenatis facilisis feugiat, justo ante
            dapibus nunc, a hendrerit urna mi in ex. Etiam eget molestie diam,
            eu auctor leo. Suspendisse id odio quis est tincidunt vulputate et
            ac ligula. Fusce non est malesuada, egestas mi id, tristique erat.
            Ut pulvinar condimentum dui a congue. In hac habitasse platea
            dictumst. Ut ac varius ex. Integer efficitur eu ligula sit amet
            pretium. Nam eget sem convallis, eleifend erat vel, dapibus diam.
            Sed ullamcorper ac elit consequat pretium. Sed placerat suscipit
            nunc in sodales. Etiam interdum dapibus dui eu tincidunt. Phasellus
            enim mauris, pellentesque et diam non, maximus auctor eros. In risus
            tellus,
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomepageDescriptionSection;
