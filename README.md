#shopping-cart

![Screenshot_2024-06-21_10-18-07](https://github.com/Preslav977/readme-repository/assets/119291608/a655f96a-f960-468c-b67a-69d30650eadd)

# Overview

This project was developed with React, with a focus on utilizing React Router, PropTypes, and testing with Vitest.

# About the project the project

The Shopping Cart project is a simplified version of the real store without integrating with the backend.
Build with React using components; the user can browse through the homepage, products page, shopping cart page, and about page.
In the product page, you can increase or decrease the quantity of a project, and in the shopping cart page, you can see the value of a product depending on the quantity or remove a product from the card.

# Features

- Product page, where the user can add a product by incrementing or decrementing the product quantity, also filters a product based on its category.
- Shopping page that the user can increase the quantity or decrease also in the cart or even remove products

# Technology Used

- React PropTypes: For creating and reusing the components with props to reduce redundancy.
- React Router: for allowing to render using Link different components without reallocating the page
- Vitest: for testing the component application

# Lessons Learned

- PropTypes: allowed to validate the types of props
- React Router: that allowed to render certain components on defined paths
- React use Effect Hook: use with React states to render the products on fetching, load a state when the fetching is not completed, or show an error, for example, if the API was down.
- Vitest library: learned how to test each component
- React Router Outlet: learned how to pass the state from the parent to the children following the tree order.
- CSS modules: creating CSS files for each component that allowed for better readability and flexibility

# Future Improvements

- Create complex tests for more coverage.
- Refactor some components to use conditional rendering to reduce duplication.
- Refactor using one state to control incrementing or decrementing the quantity of a project in the products page and shopping cart page as well.
