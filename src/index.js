//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

//Create a react components
const App = function () {
  const buttonText = "Click Me";
  return (
    //Section 2
    /*     <div> 
      <label className ="label" htmlFor = "name">
        Enter Name:
      </label>
      <input id = "name" type = "text"/>
      <button style = {{backgroundColor: 'blue', color: 'white'}}>
        {buttonText}
      </button>  
    </div> */
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45"
          avatar={faker.image.image()}
          text="Hi"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00"
          avatar={faker.image.image()}
          text="Hi Sam"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00"
          avatar={faker.image.image()}
          text="How are you?"
        />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));

//allow live reloading
if (module.hot) {
  module.hot.accept();
}
