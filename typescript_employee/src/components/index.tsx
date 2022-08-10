import React, {useState } from "react" ;
import { Routes, Route } from "react-router-dom";
import AddEmployee from './Employee/AddEmployee';

 

const Employee:React.FC =()=>{
    return(
        <React.Fragment>
            <Route path="/add" element={<AddEmployee />} />  
        </React.Fragment>
    )
}

export default Employee;