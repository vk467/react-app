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
*Tree Shaking -> remove unwanted code 



**babel** - helps in polyfill (converting modern js to older js code which can be supported in old browsers) \
      - removes console.log if we configure in .babelrc


## React Concepts: 
   =>  React.CreateElement -> Object -> HTML(DOM) \
   =>  react elements need key if we have multiple siblings(eg. list) for  Key Reconcilation (uses The diffing algorithm) 

*Reconcilation:* \
-> Virtual-dom is a representation of html-dom created by react. \
-> In virtual-dom, if a parent has multiple children(same component -eg.div) without keys, then the diff algo. will rerender the complete parent-children nodes. \
-> To overcome, key will differentiate each child nodes. Hence diff algorithm will re-render only the portion of new nodes. 

In React v16, react fiber is introduced which is a new reconcilation engine for replacement of diff algorithm. 
`The algorithm React uses to diff one tree with another to determine which parts need to be changed.` 


*React Fragment:*

render() function can have only one parent tag. (eg.div) \
If we wanna have multiple div, we can wrap it with React.Fragment tag. \
<> </> empty tags is a representation of React.Fragment 


**JSX components:** 
    * JSX -> React.CreateElement -> Object -> HTML(DOM) \
    * Babel converts JSX to React element \
    * component composition = using one component in another component

*JS Operators:* 
 ... spread operator \
 ?.  Optional chaining \
 forEach -> similar to the for loop, but it does not have a return value. \
 map -> similar to the forEach() method, but it returns a new array.


## Exports and imports 

1. Default Export 
e.g. export default Title;
      import Title from './Title'; 

2. Named Export 

Before all functions we can have export keyword. \
import {Title} from './Title'; 

3. Import All 

import * as obj from './Title'; 


## Variables 

=> React is one Way Binding whereas Angular, Knockout are Two Way Binding \
=> One way Binding -  We cannot change the value of UI component once it's defined using JS Variables.  \
=> To Overcome this, we need state variables which is provided by React Hooks. \
=> Hooks are in-built functions which is programmed for specific purpose. \
=> JSX component(page) loads every time(so each js lines will be executed on the js) when State of a variable changes. But dom update is based on reconcilation. 


## React Hooks 

1. useState()  --> accepts any input as a param; returns a list of variable and setter function for that variable. 

2. useEffect(callback fn, dependency array)  --> It is called everytime after a component is rendered for first time or re-rendered based on second param(Optional). \
* If we don't pass second param, it is called everytime after a component re-renders.
* If we pass [] as second param, it will be called only one time.
* If we pass any state as list in second param, it will be called everytime when state changes. 

*Note:* A component re-renders when state of variable or params changes. 


## Routing

1. **Client Side Routing** - client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser any other navigation or page change is just being rendered from the already saved application, so a client side application can still function without the internet as long as it has already being loaded in with the internet.
2. **Server Side Routing** - server sides needs to keep making requests to the server in order for the application to rerender

=> React uses react-router-dom to manage routes.\
=> createBrowserRouter - a function used to create routes based on given list of objects(path, element, errorelement).\
=> RouterProvider - a component accepts router props which is to be used in root render function.\ 
=> Outlet - a component acts as container for children elements defined in react router. \
=> Link - a component used to route to defined path with props "to" and "key".

Dynamic routing - path: /user/:id














###### Shimmer UI

A shimmer Ul resembles the page's actual UI, so users will understand how quickly
the web or mobile app will load even before the content has shown up. It gives people
an idea of what about to come and what's happening (it's currently loading) when a page
full of content data takes more than 3- 5 seconds to load. 


