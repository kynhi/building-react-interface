//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
       
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

//allow live reloading
if (module.hot) {
  module.hot.accept();
}
