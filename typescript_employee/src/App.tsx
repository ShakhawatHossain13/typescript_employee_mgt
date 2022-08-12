import React from 'react';  
import { Routes, Route } from "react-router-dom";
import EmployeeTable from './components/Employee/EmployeeTable'; 
import EmployeeForm from './components/Employee/EmployeeForm';
import Nav from './components/Nav';

const App: React.FC=()=> {

  return (  
    <React.Fragment>
      <Nav/>
       
      <Routes>
          <Route path="/" element={<EmployeeTable />} />
          <Route path="/add" element={<EmployeeForm />} />  
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />  

      </Routes>    
    </React.Fragment>
  );
}

export default App;
