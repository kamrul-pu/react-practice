import React from 'react';

const UserContext = React.createContext();
//provider, consumer

export default UserContext;

//provider
//Step1: create COntext
//step2: wrap childs with context provider
//step3: state access using useContext hook
//