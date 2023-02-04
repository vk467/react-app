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
* JSX -> React.CreateElement -> Object -> HTML(DOM) 
* JSX is html like syntax which is returned from functions in js 
* We can include js code among jsx using {}
* Babel converts JSX to React element 
* component composition = using one component in another component

*JS Operators:*  \
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

1. **useState()**  --> accepts any input as a param; returns a list of variable and setter function for that variable. 

2. **useEffect(callback fn, dependency array)**  --> callback fn is called everytime after a component is rendered for first time or re-rendered based on second param(Optional). \
* If we don't pass second param, it is called everytime after a component re-renders.
* If we pass [] as second param, it will be called only one time.
* If we pass any state as list in second param, it will be called everytime when state changes.

* callback fn can have return function which will be called when the component unmounts (similar to componentWillUnmount)

*Note:* A component re-renders when state of variable or params changes. 

**Important case:** \
useEffect(async () => { \
  const users = await fetchUsers(); \
  setUsers(users); 

  return () => { \
    // this never gets called, hello memory leaks... \
  }; \
}, []); 

This WORKS, but you should avoid it. Why? Because React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called. 

So what do we do? \
*Solution* : Simply put, we should use an async function inside the useEffect hook. There are two patterns you could use, an immediately-invoked function expression (preferred approach), or a named function that you invoke. 


## Routing

1. **Client Side Routing** - client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser any other navigation or page change is just being rendered from the already saved application, so a client side application can still function without the internet as long as it has already being loaded in with the internet.
2. **Server Side Routing** - server sides needs to keep making requests to the server in order for the application to rerender

=> React uses functions from **react-router-dom** to manage routes.\
=> createBrowserRouter - a function used to create routes based on given list of objects(path, element, errorelement).\
=> RouterProvider - a component accepts router props which is to be used in root render function.\ 
=> Outlet - a component acts as container for children elements defined in react router. \
=> Link - a component used to route to defined path with props "to" and "key". \
=> useParams - a hook used to get params passed in route.(To read dynamic URL Params) \
=> useRouteError - a hook used to get errors while routing.

*Dynamic routing* - path: /user/:id


#### Shimmer UI

A shimmer Ul resembles the page's actual UI, so users will understand how quickly
the web or mobile app will load even before the content has shown up. It gives people
an idea of what about to come and what's happening (it's currently loading) when a page
full of content data takes more than 3- 5 seconds to load. 



## Class based component

* class must be inherited from React.Component (extends)
* class uses render() method - inside that jsx element can be returned
* props can be used `this.props`
* constructor must include *super(props)* - If you want to implement the constructor for a React component, call the super(props) method before any other statement. Otherwise, this. props will be undefined in the constructor and create bugs.
* constructor is used to create states with help of *this.state* = {variables}
* To update states, *this.setState*({new variables}) method is used.
* **Lifecycle methods in execution order**:- constructor, render, componentDidMount
* In componentDidMount, API calls will be made.

=> Lifecycle 
 * Parent Constructor
 * Parent render
 * First Child constructor
 * First Child render
 * Second Child constructor
 * Second Child render
 * DOM UPDATED for children
 * first Child componentDidMount
 * Second Child componentDid
 * Parent componentDidMount

=> React class component Lifecycle:
1. Render Phase
2. Commit Phase
 ![React LifeCycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)


#### Optimizing Application

* Chunking or Dynamic Bundling or Lazy Loading or On-Demand Loading or Dynamic Import

=> uses **lazy(from react)** function which accepts a function param where we can call import fn with filepath in param.\
=> In route component, use **Suspense(from react)** component over our lazy component. (Because the lazy loading will take some fraction of seconds to load from net)\
=> Suspense accepts *fallback* props where we can give any component that will show in UI until lazy component loads.


#### Data Layer

* When we sent a data from route to child most component, we use props to go through in between components.
* In order to directly use, we can use **createContext** function from react. It acts as global storage across components.
* **useContext(context name)** hook is used to fetch the data stored using createContext function
* while creating context with name "customContext", we can give customContext.displayName = "customContext" in order to identify it in virtual dom.
* customContext.Provider and customContext.Consumer will be used as components to manage data.


