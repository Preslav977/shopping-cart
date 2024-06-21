#shopping-cart

1. This is the result of the Shopping Cart.

![Screenshot_2024-06-21_10-18-07](https://github.com/Preslav977/readme-repository/assets/119291608/a655f96a-f960-468c-b67a-69d30650eadd)

2. About the project the project.

- The idea of this project is to create a shopping cart project that shows multiple pages of content.
- The project has to contain at least two pages; in my case, I have three pages: the home page, the products page, the cart page, and the about page.
- [x] create folder structure for the project and component structure
- [x] two-page homepage and shop page for the products
- The user should be able to navigate on the shop page, and the navbar should stay on all pages.
- [x] adds content to the homepage, which you can test later.
- [x] Create a page for the shopping cart, still showing the navbar and the number of products in the cart.
- [x] build individual cart components for the products, allow the user to type or click to increase or decrease the quantity of a product, and add it to the cart.
- [x] fetch the products from FakeStoreAPI using useEffect or a similar API.
- [x] logic that allows depending on the product quantity to increase or decrease the price of a product
- [x] testing the components for navigation, if they exist on the screen, and user events.

3. Notes and lessons learned

- I learned how to use the propTypes package, which allows me to validate the props using the correct types.
- How to use React router to allow to render certain components on created paths and using index to show rendered components by default
- How to use effect and states that will render if there is an error or if the loading wasn't successful.
- I learned how to test with the React testing library and what to test each component for.
- Learned how to use outlet context on a react router that allows states to pass from down the tree in order to use them in other components.
- I learned how to use CSS modules to style each component and split the CSS into different files.

4. Features or things I'd love to work on in the future

- [ ] create more tests to provide more coverage.
- [ ] use conditional rendering or dynamic segments for some components.
- [ ] Figure out how to better manage one state in order to increment the quantity of a product on the products page as well as on the cart page.
