import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Page from './Components/ConditionalRendering/Page';
import EventExample from './Components/EvenetHandler/EventExample';
import BindEx from './Components/EVENT_BINDING/BindEx';
import RHook from './Components/Hooks/RHook';
import Counter from './Components/Counter/Counter';
import FORM1 from './Components/FORMS/FORM1';
import FORM2 from './Components/FORMS/FORM2';
// import Parent from './Components/STATE_LIFTING/Parent';
import SignUp from './Components/Formik_Form/SignUp';
import Home from './Components/TODO/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    {/* <SignUp /> */}
    <Home />
    {/* <Parent /> */}
    {/* <FORM2 /> */}
    {/* <FORM1 /> */}
    {/* <Counter /> */}
    {/* <EventExample />
    <BindEx />
    <RHook /> */}
    {/* <Page /> */}
    {/* <Main /> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
