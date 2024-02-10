import NavBar from "./components/NavBar";
import storeLogo from "./assets/store-logo.jpg";
import shoppingCart from "./assets/shopping-cart.svg";

function App() {
  return (
    <>
      <NavBar
        homePathNameLogo="/"
        homePathImgSrc={storeLogo}
        homePathImgAlt="Clothing Store"
        homePath="/"
        homePathName="Home"
        productsPath="/products"
        productsPathName="Products"
        aboutPath="/about"
        aboutPathName="About"
        cartPath="/products/cart"
        cartPathImgSrc={shoppingCart}
        cartPathImgAlt="Store logo"
      />
    </>
  );
}

export default App;
