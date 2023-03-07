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
// import CustomHooks from './Components/Hooks/CustomHooks';
// import App from './Components/Assignment4/App';
// import DynamicStyle from './Components/DynamicStyle/DynamicStyle';
// import App from './Components/App';
// import LifeCycle from './Components/ClassComponent/LifeCycle';
// import App from './Components/PropsType/App';
// import App from './Components/RefExample/App';
import App from './Components/App';
import UserForm from './Components/Hooks/UserForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
