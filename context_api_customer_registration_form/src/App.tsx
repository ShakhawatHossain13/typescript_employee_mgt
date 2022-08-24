import React from 'react';  
import { Routes, Route } from "react-router-dom"; 
import CustomerForm from './components/Customer'; 
import Header from './components/Header';
const App: React.FC=()=> {

  return (  
    <React.Fragment> 
      <Header />
      <Routes> 
          <Route path="/" element={<CustomerForm />} />   
      </Routes>    
    </React.Fragment>
  );
}

export default App;
