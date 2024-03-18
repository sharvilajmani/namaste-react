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
