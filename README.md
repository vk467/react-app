React Learning

React is a library.

npx create-react-app = react + webpack(bundler) + babel

bundlers - parcel/webpack/vite


Parcel - features
 
*HMR Hot Module Reloading
*File Watcher algorithm (written in C++)
*BUNDLING
*MINIFY
*Cleaning our Code
*Dev and Production Build
*Super Fast build algorithm
*Image optimization
*Caching while development
*Compression
*Compatble with older version of browser
*HTTPS on dev
*port Number
*Consistent Hashing Algorithm
*Zero Config
*Tree Shaking -> remove unwanted code



babel - helps in polyfill (converting modern js to older js code which can be supported in old browsers)
      - removes console.log if we configure in .babelrc


React elements:
    React.CreateElement -> Object -> HTML(DOM)
    react elements need key if we have multiple siblings(eg. list)   Key Reconcilation (uses The diffing algorithm)

JSX components:
    * JSX -> React.CreateElement -> Object -> HTML(DOM)
    * Babel converts JSX to React element
    * component composition = using one component in another component