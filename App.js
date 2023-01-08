/****
 * 
 * Parcel - features
 * 
*HMR Hot Module Reloading
* File Watcher algorithm C++
* BUNDLING
* MINIFY
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
* Tree Shaking = remove unwanted
 * 
 * 
 */


import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1>React App</h1>
);

//JSX -> React.CreateElement -> Object -> HTML(DOM)
//Babel converts JSX to React element
//component composition = using one component in another component

const Component = () =>{
  return(
    <div>
      {title}
      <h2>React functional component</h2>
    </div>
  );
}
 
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<Component />);
  