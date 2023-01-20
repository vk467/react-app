# React Learning

React is a library.

**npx create-react-app = react + webpack(bundler) + babel**

*bundlers - parcel/webpack/vite*


**Parcel - features**
 
*HMR Hot Module Reloading \
*File Watcher algorithm (written in C++) \
*BUNDLING \
*MINIFY \
*Cleaning our Code \
*Dev and Production Build \
*Super Fast build algorithm \
*Image optimization \
*Caching while development \
*Compression \
*Compatble with older version of browser \
*HTTPS on dev \
*port Number \
*Consistent Hashing Algorithm \
*Zero Config \
*Tree Shaking -> remove unwanted code \



**babel** - helps in polyfill (converting modern js to older js code which can be supported in old browsers) \
      - removes console.log if we configure in .babelrc


## React Concepts: \
   =>  React.CreateElement -> Object -> HTML(DOM) \
   =>  react elements need key if we have multiple siblings(eg. list) for  Key Reconcilation (uses The diffing algorithm) \

*Reconcilation:* \
-> Virtual-dom is a representation of html-dom created by react. \
-> In virtual-dom, if a parent has multiple children(same component -eg.div) without keys, then the diff algo. will rerender the complete parent-children nodes. \
-> To overcome, key will differentiate each child nodes. Hence diff algorithm will re-render only the portion of new nodes. \

In React v16, react fiber is introduced which is a new reconcilation engine for replacement of diff algorithm. \ 
`The algorithm React uses to diff one tree with another to determine which parts need to be changed.` \


*React Fragment:*\

render() function can have only one parent tag. (eg.div) \
If we wanna have multiple div, we can wrap it with React.Fragment tag. \
<> </> empty tags is a representation of React.Fragment \


**JSX components:** \
    * JSX -> React.CreateElement -> Object -> HTML(DOM) \
    * Babel converts JSX to React element \
    * component composition = using one component in another component

*JS Operators:* \
 ... spread operator \
 ?.  Optional chaining \
 forEach -> similar to the for loop, but it does not have a return value. \
 map -> similar to the forEach() method, but it returns a new array.


## Exports and imports \

1. Default Export \
e.g. export default Title;
      import Title from './Title'; \

2. Named Export \

Before all functions we can have export keyword. \
import {Title} from './Title'; \

3. Import All \

import * as obj from './Title'; \


## Variables \

=> React is one Way Binding whereas Angular, Knockout are Two Way Binding \
=> One way Binding -  We cannot change the value of UI component once it's defined using JS Variables.  \
=> To Overcome this, we need state variables which is provided by React Hooks. \
=> Hooks are the functions which returns list of variable and setter function for that variable. \

