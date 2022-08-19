import React from 'react';  
import { Routes, Route } from "react-router-dom"; 
import CustomerForm from './components/Customer'; 
const App: React.FC=()=> {

  return (  
    <React.Fragment> 
      <Routes> 
          <Route path="/" element={<CustomerForm />} />   
      </Routes>    
    </React.Fragment>
  );
}

export default App;
