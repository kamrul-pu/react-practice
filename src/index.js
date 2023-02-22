import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
// import App from './Components/TODO_APP/App';
// import Toggle from './Components/Toggle/Toggle';
// import FAQS from './Components/FAQ/FAQS';
// import Todos from './Components/Assignment3/Todos';

// import RHook from './Components/Hooks/RHook';
// import DataFetch from './Components/Hooks/DataFetch';
import CustomHooks from './Components/Hooks/CustomHooks';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <CustomHooks />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
