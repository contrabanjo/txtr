import React from "react";
import ReactDOM from "react-dom";
import Welcome from './components/welcome.jsx'

const App = () => {

  return <div>
      <Welcome/>
    </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));