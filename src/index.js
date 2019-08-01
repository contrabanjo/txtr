import React from "react";
import ReactDOM from "react-dom";
import Login from './components/login.jsx'

const App = () => {
  return <div>Hello React,Webpack 4, Babel 7!
    <Login/>
  </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));