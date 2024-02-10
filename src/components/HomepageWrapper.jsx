import Homepage from "./Homepage";

function HomePageWrapper() {
  const homePageHeader = "Welcome to Excalibur Store";
  const homePageDesc =
    "Start shopping now, by clicking the button and seeing all the available products";
  const homePageMoreDesc = "Shop now, why wait for tomorrow";
  const pathToProducts = "/products";
  const pathToProductsName = "Shop Now";
  const homePageImgSrc = "./src/assets/store.jpg";
  const homePageImgAlt = "Homepage";

  return (
    <>
      <Homepage
        homePageHeader={homePageHeader}
        homePageDesc={homePageDesc}
        homePageMoreDesc={homePageMoreDesc}
        pathToProducts={pathToProducts}
        pathToProductsName={pathToProductsName}
        homePageImgSrc={homePageImgSrc}
        homePageImgAlt={homePageImgAlt}
      ></Homepage>
    </>
  );
}

export default HomePageWrapper;
