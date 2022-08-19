import React, {useState, useEffect} from 'react';   
import {makeStyles} from "@material-ui/core";  
import CustomerBasicInfo from './CustomerBasicInfo';
import CustomerAddress from './CustomerAddress';
import CustomerContact from './CustomerContact'; 
import CustomerBlackInfo from './CustomerBlackInfo';
import CustomerSupplimentaryInfo from './CustomerSupplimentaryInfo';
import { Customer } from '../../model';

const useStyles = makeStyles({
  container:{
    width: "100%%",
    display: "grid",     
    gridTemplateColumns:"repeat(2, 1fr)", 
    margin: 0,
    padding: "0px !important",
    boxSizing:"border-box",
  },
  wrapper1: {
      width: "97%",
      backgroundColor:"cyan",
      margin: "auto",
      marginTop: "10px",
      padding: "10px",    
      display: "grid",     
      gridTemplateColumns:"repeat(8, 1fr)", 
      gridAutoRows:"minmax(250px, auto)",
      fontFamily: "Times New Roman', Times, serif",
      '@media screen and (max-width: 480px)' : {
          width: '90%'
      }     
  }, 
  wrapper2: {
      width: "97%",
      backgroundColor:"#fff",
      margin: "auto",     
      padding: "10px",    
      gridColumn: "9", 
      display: "grid",     
      gridTemplateColumns:"repeat(8, 1fr)", 
      gridAutoRows:"minmax(250px, auto)",
      fontFamily: "Times New Roman', Times, serif",        
    }, 
  }
); 
type ErrorType = {
  [key: string]: string;
};
const initialError: ErrorType = {
    tel:"",
    name: "",
    title: "", 
    furigana:"",
    sortcode:"",
    serviceLevel:"",
    groupCode:"",
    address1: "",     
    address2: "",
    address3: "", 
    address4: "", 
    company:"",
    department:"",
    email: "",
    email1: "",
    email2: "",
    remarks: "",
};

type CustomerDataType = {    
    tel:string,
    name: string,
    title: string, 
    furigana: string,

    sortcode:string,
    serviceLevel:string,
    groupCode:string,
    address1: string,     
    address2: string,
    address3: string, 
    address4: string, 
    
    company:string,
    department:string,
    email: string,
    email1: string,
    email2: string,
    remarks: string,
};

const formData: CustomerDataType = {
    tel:"",
    name: "",
    title: "", 
    furigana:"",
    sortcode:"",
    serviceLevel:"",
    groupCode:"",
    address1: "",     
    address2: "",
    address3: "", 
    address4: "", 
    company: "",
    department: "",
    email: "",
    email1: "",
    email2: "",
    remarks: "",
};

const CustomerForm: React.FC=()=> { 
  const[customer, setCustomer] = useState<Customer>(formData);
  const [error, setError] = React.useState<ErrorType>(initialError);     
  const classes = useStyles();
  console.log(customer);
  const handleClick =(e :React.MouseEventHandler<HTMLButtonElement> ) =>{ 
        if (isValid()) {
            return;
        }
    console.log(customer);
  }

    /** 
        Method for validating fields
      */
        const isValid = () => {
          let hasError = false;
          const copyErrors: ErrorType = { ...error };    
          const validationFields = [
            "tel",
            "name",
            "title", 
            "address1",     
            "address2",
            "address3", 
            "address4", 
            "email",
            "email1",
            "email2",
          ];    
          for (let key in copyErrors) {
            if (
              validationFields.includes(key) &&
              customer[key as keyof typeof customer] === ""
            ) {
              copyErrors[key] = "required";
              hasError = true;
            } else {
              copyErrors[key] = ``;
            }
          }    
          setError(copyErrors);    
          return hasError;
        };

  return (  
    <React.Fragment>       
      <div className={classes.container}>           
        <div className={classes.wrapper1}>
            <CustomerBasicInfo error= {error} setError={setError}  setCustomer={setCustomer}/>
            <CustomerAddress  error= {error} setError={setError}  setCustomer={setCustomer}/>    
            <CustomerContact  error= {error} setError={setError} setCustomer={setCustomer}/>            
        </div>           

        <div className={classes.wrapper2}>
            <CustomerBlackInfo error= {error} setError={setError}  setCustomer={setCustomer}/>
            <CustomerSupplimentaryInfo error= {error} setError={setError}  setCustomer={setCustomer} />
        </div> 
        {/* <Button  onClick={()=>handleClick}>
          Submit
        </Button>     */}
      </div> 
    </React.Fragment>
  );
}

export default CustomerForm;
