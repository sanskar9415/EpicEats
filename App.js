// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';

// create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)

const heading = <h1 id = "title" key = "h2">Namaste react</h1>

// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component
  

// Title component is functional component
const Title = () => {
  return (
    <h1 id="title" key="title">Namaste React</h1>
  )
}

// Header component is functional component
const HeaderComponent = function (){
  return (
    <div>
      <Title/>
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {console.log(10)}
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
}

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<HeaderComponent/>);