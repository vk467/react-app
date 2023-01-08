#React Learning

React is a library.

**npx create-react-app = react + webpack(bundler) + babel**

*bundlers - parcel/webpack/vite*


##Parcel - features
 
*HMR Hot Module Reloading__
*File Watcher algorithm (written in C++)__
*BUNDLING__
*MINIFY__
*Cleaning our Code__
*Dev and Production Build__
*Super Fast build algorithm__
*Image optimization__
*Caching while development__
*Compression__
*Compatble with older version of browser__
*HTTPS on dev__
*port Number__
*Consistent Hashing Algorithm__
*Zero Config__
*Tree Shaking -> remove unwanted code__



**babel** - helps in polyfill (converting modern js to older js code which can be supported in old browsers)__
      - removes console.log if we configure in .babelrc


**React elements:**
    React.CreateElement -> Object -> HTML(DOM)__
    react elements need key if we have multiple siblings(eg. list)   Key Reconcilation (uses The diffing algorithm)

**JSX components:**
    * JSX -> React.CreateElement -> Object -> HTML(DOM)__
    * Babel converts JSX to React element__
    * component composition = using one component in another component

*JS Operators:*
 ... spread operator__
 ?.  Optional chaining__
 forEach -> similar to the for loop, but it does not have a return value.__
 map -> similar to the forEach() method, but it returns a new array.