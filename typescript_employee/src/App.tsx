import React from 'react';  
import { Routes, Route } from "react-router-dom";
import EmployeeTable from './components/Employee/EmployeeTable';
import AddEmployee from './components/Employee/AddEmployee';
import EditEmployee from './components/Employee/EditEmployee';
import Nav from './components/Nav';

const App: React.FC=()=> {

  return (  
    <React.Fragment>
      <Nav/>
       
      <Routes>
          <Route path="/" element={<EmployeeTable />} />
          <Route path="/add" element={<AddEmployee />} />  
          <Route path="/edit-employee/:id" element={<EditEmployee />} />  

      </Routes>    
    </React.Fragment>
  );
}

export default App;
