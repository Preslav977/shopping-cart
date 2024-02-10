import NavBar from "./components/NavBar";
// import storeLogo from "./assets/store-logo.jpg";
// import shoppingCart from "./assets/shopping-cart.svg";
import Footer from "./components/Footer";
// import compassSvg from "./assets/compass.svg";
// import mapSvg from "./assets/map.svg";
// import phoneSvg from "./assets/phone.svg";
// import emailSvg from "./assets/email.svg";
// import faceBookSvg from "./assets/facebook.svg";
// import twitterSvg from "./assets/twitter.svg";
// import instragramSvg from "./assets/instagram.svg";
// import youtubeSvg from "./assets/youtube.svg";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer
      // footerImgSrc={storeLogo}
      // footerImgAlt="Store logo"
      // footerHeader="Useful Links"
      // footerCompassSvg={compassSvg}
      // footerHomePath="/"
      // footerHomePathName="Home"
      // footerProductsPath="/products"
      // footerProductsPathName="Products"
      // footerAboutPath="/about"
      // footerAbouthPathName="About"
      // footerHeaderContact="Contact Us"
      // footerLocation="Location"
      // footerLocationSrc={mapSvg}
      // footerLocationDesc="Somewhere in the world"
      // footerPhone="Phone"
      // footerPhoneSrc={phoneSvg}
      // footerEmail="Email"
      // footerEmailSrc={emailSvg}
      // footerSocials="Social Networks"
      // footerFacebookSrc={faceBookSvg}
      // footerTwitterSrc={twitterSvg}
      // footerInstragramSrc={instragramSvg}
      // footerYoutubeSrc={youtubeSvg}
      />
    </>
  );
}

export default App;
