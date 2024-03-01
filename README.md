#shopping-cart

- This is the result of the project Shopping Cart.

![Screenshot_2024-03-01_15-25-14](https://github.com/Preslav977/readme-repository/assets/119291608/ffb22695-2093-4bda-be2d-d401e91fbd9b)

1. About the project the project. The idea of this project is to create a shopping cart project that shows multiple pages of content. The project has to contain at least two pages; in my case, I have three pages: the home page, the products page, the cart page, and the about page.

- The first objective was to figure out the folder structure of the project; for example, the api folder contains the fetching component, the component folder contains the components of each page with their styles, and the tests folder has tests for each component.
- The second objective is to create a two-page homepage with some content and a shop page where the product will be displayed later. Also, the header and footer components that will be shown on each page help to nag the user.
- The third objective is to create content for the homepage.
- The fourth one is to create a shopping cart page that shows the same navigation bar (header) and a button where you can checkout the products while they are in the cart.
- The fifth is to create a card component for each product with an input to type the number of units of the product and buttons on the left and right sides where you can increment or decrease the quantity of the product. As well as the add-to-cart button.
- The next objective to fetch in this project is the FakeStoreAPI.
- The next objective is to calculate the price when a product is added to the cart. Depending on the quantity, the price should adjust itself accordingly.

2. Notes and lessons learned.

- The first lesson that I learned is to use propTypes in order to validate the props. This way, I can be sure that my props are using the correct value. This could be a number string, an object array, or a function.
- The second lesson I learned is the react router, which helps go from one page to another. My solution was simple: the app is the entry point of my project, and the other pages are the children. This way, the navbar and the footer can be shown on each page, and the other ones will be loaded once you click the link.
- The next thing I learned is how to fetch the data using useEffect and other states, which show if the fetch is not completed or if there is an error to show it on the page. This way, the user can see that something is wrong.
- I learned react testing as well; this is a pretty crucial point that I struggle with so much in order to understand what I should test and what I should expect with these kinds of tests since they are different from the unit ones. The main idea is to create a component, then expect in the test to render the content of this component accordingly. For example, if a heading with some text is expected to be shown on the screen, with this test, I can make sure the element is correctly rendered on the screen.
- The next kind of test is for nagivation with using a memory router. I can mock going from one page to another. A memory router contains two properties: initial entries, which are an array of paths, and an initial index, which can be used to specify the initial page to load.
- The third kind of test for snaphosts These ones are comparing the previous version of the component with the changed one using one and comparing the two if there is a change, if there is a test break, otherwise it passes. I haven't used these tests yet since they break so easily.
- The interesting part of react testing is that you need to test for input and output; you shouldn't create an object in a state or something like a unit test in order to pass these kinds of tests.
- Also, using context is a pretty powerful tool since it allows me to pass through the outlet on other pages. I haven't been introduced to this yet, but it was an interesting problem to solve with the React Dom router.
- I also learned how to structure the paths for each element in the router and how dynamic segmentation works, which I haven't applied yet but will in the next projects.
  Also, styling with CSS modules is pretty nice. This way, each component will have its own style.

3. Features or things I'd love to work on for this project in the future

- The first one is to create more tests.
- Use conditional rendering or dynamical segments for some components.
- Make each page responsive.
- Figure out how to better manage one state in order to increment the quantity of a product on the products page as well as on the cart page.
