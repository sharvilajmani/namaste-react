# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm(written in C++)
- Caching(faster builds possible because of this)
- Image optimization(loading images is most expensive thing in browser)
- Minification of our files
- Bundling
- Compressing files
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

// Header component

// - Logo component
// - Nav items component

// Body component

// - search component
// - Restaurant container
// - Restaurant Card
// - img
// - name of Restaurant, star rating, cuisine, delivery time

// Footer component

// - Copyright
// - Links
// - Address
// - Contact

# Two types of export/import

-Default Export/Import

export default Component
import Component from "path";

-Named Export/Import

export const Component
import {Component} from "path";

If you need to export more than one variable or component in one file, use named export/import because you can only export one default variable or component in one file

# React Hooks

(Normal JS utility functions)
Two most important hooks

- useState() - super powerful state variable in react
- useEffect()

# There are two types of routing that you can have in web application

- Client side routing
- Server side routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create a slice(cart slice)
- Dispatch an action
- Read the data using selector

# Types of testing developer can do

- Unit testing
- Integration testing
- End to end testing(e2e)

# Setting up testing in our app

- Install React testing library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config File to disable default Babel transpilation
- Jest configuration(npx jest --init)
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react in babel config
- Install @testing-library/jest-dom
