import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

function Footer({
  footerImgSrc,
  footerImgAlt,
  footerHeader,
  footerCompassSvg,
  footerHomePath,
  footerHomePathName,
  footerProductsPath,
  footerProductsPathName,
  footerAboutPath,
  footerAbouthPathName,
  footerHeaderContact,
  footerLocation,
  footerLocationSrc,
  footerLocationDesc,
  footerPhone,
  footerPhoneSrc,
  footerEmail,
  footerEmailSrc,
  footerSocials,
  footerFacebookSrc,
  footerTwitterSrc,
  footerInstragramSrc,
  footerYoutubeSrc,
}) {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerStoreLogo}>
          <img
            className={styles.footerStoreImg}
            src={footerImgSrc}
            alt={footerImgAlt}
          />
        </div>
        <div className={styles.footerNavigationSvgs}>
          <div className={styles.footerUsefulLinks}>
            <h2>{footerHeader}</h2>
            <img className={styles.footerSvgs} src={footerCompassSvg} alt="" />
          </div>
          <li>
            <Link to={footerHomePath}>{footerHomePathName}</Link>
          </li>
          <li>
            <Link to={footerProductsPath}>{footerProductsPathName}</Link>
          </li>
          <li>
            <Link to={footerAboutPath}>{footerAbouthPathName}</Link>
          </li>
        </div>
        <div className={styles.footerContactSection}>
          <h4>{footerHeaderContact}</h4>
          <div className={styles.locationContainer}>
            <p>{footerLocation}</p>
            <img className={styles.footerSvgs} src={footerLocationSrc} alt="" />
          </div>
          <p>{footerLocationDesc}</p>
          <div className={styles.phoneContainer}>
            <p>{footerPhone}</p>
            <img className={styles.footerSvgs} src={footerPhoneSrc} alt="" />
          </div>
          <div className={styles.emailContainer}>
            <p>{footerEmail}</p>
            <img className={styles.footerSvgs} src={footerEmailSrc} alt="" />
          </div>
        </div>
        <div className={styles.socialNetworksContainer}>
          <h4>{footerSocials}</h4>
          <div>
            <img className={styles.footerSvgs} src={footerFacebookSrc} alt="" />
          </div>
          <div>
            <img className={styles.footerSvgs} src={footerTwitterSrc} alt="" />
          </div>
          <div>
            <img
              className={styles.footerSvgs}
              src={footerInstragramSrc}
              alt=""
            />
          </div>
          <div>
            <img className={styles.footerSvgs} src={footerYoutubeSrc} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  footerImgSrc: PropTypes.string,
  footerImgAlt: PropTypes.string,
  footerHeader: PropTypes.string,
  footerCompassSvg: PropTypes.string,
  footerHomePath: PropTypes.string,
  footerHomePathName: PropTypes.string,
  footerProductsPath: PropTypes.string,
  footerProductsPathName: PropTypes.string,
  footerAboutPath: PropTypes.string,
  footerAbouthPathName: PropTypes.string,
  footerHeaderContact: PropTypes.string,
  footerLocation: PropTypes.string,
  footerLocationSrc: PropTypes.string,
  footerLocationDesc: PropTypes.string,
  footerPhone: PropTypes.string,
  footerPhoneSrc: PropTypes.string,
  footerEmail: PropTypes.string,
  footerEmailSrc: PropTypes.string,
  footerSocials: PropTypes.string,
  footerFacebookSrc: PropTypes.string,
  footerTwitterSrc: PropTypes.string,
  footerInstragramSrc: PropTypes.string,
  footerYoutubeSrc: PropTypes.string,
};

export default Footer;
