import React from "react";
import ReactDOM from "react-dom";
import TextEntry from './components/textEntry.jsx'

const App = () => {

  return <div>
      <TextEntry/>
    </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));