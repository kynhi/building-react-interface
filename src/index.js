//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

//Create a react components
const App = function(){
  const buttonText = "Click Me"
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
    <div className = "ui container comments">
      <CommentDetail/>
      <CommentDetail/>
      <CommentDetail/>
    </div>
  );
};


// Take the react component and show it on the screen

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);

//allow live reloading
if (module.hot) {
  module.hot.accept();
}