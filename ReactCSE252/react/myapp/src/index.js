import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Bike from './component/Bike.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Bike/>
  </React.StrictMode>
);

// function car(){
//   return(
//     <h1>Welcome to my car for visit Nepal</h1>
//   );
// }





// If you want to start measuring performance in your a
// /pp, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
