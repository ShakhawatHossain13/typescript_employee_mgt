import React, {useState, useEffect} from 'react';   
import {makeStyles} from "@material-ui/core";  
import CustomerHead from './CustomerHead';
import CustomerBasicInfo from './CustomerBasicInfo';
import CustomerAddress from './CustomerAddress';
import CustomerContact from './CustomerContact'; 
import CustomerBlackInfo from './CustomerBlackInfo';
import CustomerSupplimentaryInfo from './CustomerSupplimentaryInfo';
import { CustomerContext } from '../contexts/CustomerContext';
import { Customer } from '../../model';

const useStyles = makeStyles({
  container:{
    width: "100%%",
    display: "grid",     
    gridTemplateColumns:"repeat(2, 1fr)", 
    margin: 0,
    marginLeft: "20px",      
    boxSizing:"border-box",
    '@media screen and (max-width: 768px)' : {
      gridTemplateColumns:"repeat(1, 1fr)", 
      width: "100%",  
      marginLeft: 0,   
  } 
  },
  wrapper1: {
      width: "98%",
      fontFamily: "Times New Roman', Times, serif",   
      '@media screen and (max-width: 768px)' : {        
        width: "100%",          
    }        
  }, 
  wrapper2: {
      width: "98%",
      backgroundColor:"#fff",   
      '@media screen and (max-width: 768px)' : {        
        width: "100%",          
    }         
    }, 
    basicBlock:{
      backgroundColor:"#E0FFFF",
      gridColumn: "1/9",
      marginTop: "10px",
      padding: "10px",          
      display: "grid",          
    }
  }
); 
type ErrorType = {
  [key: string]: string;
};
const initialError: ErrorType = {
    tel:"",
    name: "",
    title: "", 
    furigana: "",
    sortcode:"",
    search: "",
    serviceLevel:"",
    prefectures:"",
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
    blackInfo: "",
    regionCode: "",
    gender: "",
    age: "",
    customerFactor: "",
    clarificationCode: "",
    orderCategory: "",
    classification: "",
    lastStoreCd: "",
    customerRank: "",
    creditRegistration: "",    
    doNotSendDM: "",
    doNotIssuePurchseOrder: "",
    requester: "",
    requirement: "",
    receipt: "",
    receiptAddress: "",
    discountRate: "",    
    discountRateMemo: "",
    urgeToDistinguish: "",  
    closingDateClass: "",
    customerGeneric1: "",  
    customerGeneric2: "",
    customerGeneric3: "",  
    customerGeneric4: "",
    customerGeneric5: "", 
};

type CustomerDataType = {   
    type:string, 
    tel:string,
    name: string,
    title: string, 
    furigana: string,
    sortcode:string,
    search: string,
    serviceLevel:string,
    prefectures:string,
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
    blackInfo: string,
    regionCode: string,
    gender: string,
    age: string,
    customerFactor: string,
    clarificationCode: string,
    orderCategory: string,
    classification: string,
    lastStoreCd: string,
    customerRank: string,
    creditRegistration: string,   
    doNotSendDM: string,
    doNotIssuePurchseOrder: string,
    requester: string,
    requirement: string,
    receipt: string,
    receiptAddress: string,
    discountRate: string,    
    discountRateMemo: string,
    urgeToDistinguish: string,  
    closingDateClass: string,
    customerGeneric1: string,  
    customerGeneric2: string,
    customerGeneric3: string,  
    customerGeneric4: string,
    customerGeneric5: string,      
};

const formData: CustomerDataType = {
    type:"personal",
    tel:"",
    name: "",
    title: "", 
    furigana: "",
    sortcode:"",
    search: "",
    serviceLevel:"",
    prefectures:"",
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
    blackInfo: "",
    regionCode: "",
    gender: "",
    age: "",
    customerFactor: "",
    clarificationCode: "",
    orderCategory: "",
    classification: "",
    lastStoreCd: "",
    customerRank: "",
    creditRegistration: "", 
    requester: "",
    requirement: "",
    receipt: "dont",
    receiptAddress: "",
    discountRate: "",    
    discountRateMemo: "",
    urgeToDistinguish: "",  
    closingDateClass: "",
    customerGeneric1: "",  
    customerGeneric2: "",
    customerGeneric3: "",  
    customerGeneric4: "",
    customerGeneric5: "",     
    doNotSendDM: "no",
    doNotIssuePurchseOrder: "no",   
};
 
const CustomerForm: React.FC=()=> { 
  const[customer, setCustomer] = useState<Customer>(formData);
  const [error, setError] = React.useState<ErrorType>(initialError);     
  const classes = useStyles(); 
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCustomer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });    
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  }; 

const emailRegex=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       /** 
        Method for validating fields
      */
        const isValid = () => {
          let hasError = false;
          const copyErrors: ErrorType = { ...error };  
          const emailFields = [                   
            "email",   
            "email1",
            "email2",
          ];
          const validationFields = [   
            "tel",                 
            "name",           
            "customerFactor",
            "clarificationCode",
            "title",
            "furigana",
            "sortcode",
            "search",
            "serviceLevel",
            "prefectures",
            "groupCode",
            "address1",
            "company",
            "department",  
            "email",   
            "email1",
            "email2",
            "gender",         
          ];  
          for (let key in copyErrors) {
            if (
              validationFields.includes(key) &&
              customer[key as keyof typeof customer] === "" 
            ) {
              copyErrors[key] = "required";
              hasError = true;
            } else if (  
              emailFields.includes(key) &&
           (!(customer[key as keyof typeof customer].match(emailRegex)))
            ) {
              copyErrors[key] = "Check email";
              setError(copyErrors);  
              hasError = true;
              return hasError;
            }   
          }               
          setError(copyErrors);    
          return hasError;
        };

  return (  
    <React.Fragment>     
    <CustomerContext.Provider value={{customer, error, setError, setCustomer, handleFormChange}} >
      <form className={classes.container} >                    
        <div className={classes.wrapper1}>
              <CustomerHead />   
            <div className={classes.basicBlock}>  
              <CustomerBasicInfo />            
              <CustomerAddress />    
              <CustomerContact />  
            </div>          
        </div>           
        <div className={classes.wrapper2}>
            <CustomerBlackInfo  />
            <CustomerSupplimentaryInfo />
        </div> 
           <button style={{ width: "100px"}} type='submit'  onClick={(e) => {
              e.preventDefault();
              if (isValid()) {
                  return;
              } 
              console.log(customer);
            }}>submit</button>
      </form> 
      </CustomerContext.Provider>  
    </React.Fragment>
  );
}

export default CustomerForm;
