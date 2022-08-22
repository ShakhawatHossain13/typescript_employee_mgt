import React, { FormEvent} from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';
 
const useStyles = makeStyles({
  formInput: {      
       marginBottom: "20px",
       boxSizing: "border-box",         
        '@media screen and (max-width: 480px)' : {
            width: '90%'
        }     
    }, 
    formInputLabel: {       
      fontFamily: "'Times New Roman', Times, serif", 
      padding: "6px 0", 
      textAlign: "right", 
      fontSize: "12px",
      color: "#000",
    }, 
    formInputLabelOne: {      
      gridColumn: "1",  
    }, 
    start:{
      // gridRowStart:"4",
    },
    formInputLabelTwo: {      
      gridColumn: "3",  
    }, 
    formInputLabelFour: {      
      gridColumn: "5",  
    }, 
    formInputBox: {          
      fontFamily: "'Times New Roman', Times, serif",
      border: '1px solid #000',
      marginLeft: "20px",
      borderRadius: '20px',
      padding: "0 5px",
      marginBottom: "12px",
      height:"25px",
      fontSize: "12px",
      backgroundColor: "#fff",      
      "& .MuiFormHelperText-root": {         
        marginTop: "-4px",
      },
    }, 
    formInputBoxOne: {  
      gridColumn: "2 / 5",
     },
    formInputBoxTwo: {          
      gridColumn: "2 / 6", 
    }, 
    formInputBoxFour: {          
      gridColumn: "6", 
    }, 
   }
  );  
  type ErrorType = {
    [key: string]: string;
  };
  type CustomerAddressProps ={
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>;
    setCustomer : React.Dispatch<React.SetStateAction<Customer>>;
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  };
const CustomerAddress:React.FC<CustomerAddressProps> =({error, setError, setCustomer, handleFormChange})=>{       
const classes = useStyles();
    return(
        <React.Fragment>           
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>Address line 1</FormLabel>
              <TextField
                  name="address1"
                  id= "address1"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                  onChange={handleFormChange}
                  helperText={error.address1}
                  error={Boolean(error.address1)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Address 2</FormLabel>
              <TextField
                  name="address2"
                  id= "address2"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}  
                  onChange={handleFormChange}
                  helperText={error.address2}
                  error={Boolean(error.address2)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Address 3</FormLabel>
              <TextField
                  name="address3"
                  id= "address3" 
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                  onChange={handleFormChange}
                  helperText={error.address3}
                  error={Boolean(error.address3)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Address 4</FormLabel>
              <TextField
                  name="address4"
                  id= "address4" 
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                  onChange={handleFormChange}
                  helperText={error.address4}
                  error={Boolean(error.address4)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              />           
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Company Name</FormLabel>
              <TextField
                  name="company"
                  id= "company" 
                  className={`${classes.formInputBox} ${classes.formInputBoxTwo}`}  
                  onChange={handleFormChange}
                  helperText={error.company}
                  error={Boolean(error.company)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              />   
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Department Name</FormLabel>
              <TextField
                  name="department"
                  id= "department" 
                  className={`${classes.formInputBox} ${classes.formInputBoxTwo}`}    
                  onChange={handleFormChange}
                  helperText={error.department}
                  error={Boolean(error.department)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              />   
        </React.Fragment>
    )
}

export default CustomerAddress;

 



 