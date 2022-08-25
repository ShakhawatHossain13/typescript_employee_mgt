import React from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField} from "@material-ui/core"; 
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';
import { CustomerContext } from "../../contexts/CustomerContext"; 
  
const useStyles = makeStyles({
  formInput: {      
      width: "97%",
      backgroundColor:"palegreen",
      margin: "0 auto",
      padding: "10px",    
      gridColumn: "1/9",  
      display: "grid",     
      gridTemplateColumns:"repeat(8, 1fr)",  
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
        marginTop: "-6px",
        fontSize:"11px",              
        padding: "0 7px",
      },
    }, 
    formInputBoxOne: {  
      gridColumn: "2 / 7",
     },
    formInputBoxTwo: {          
      gridColumn: "2 / 6", 
    }, 
    formInputBoxFour: {          
      gridColumn: "6", 
    }, 
    formInputBoxEmailNo:{
      border: "1px solid #000",
      borderRadius: "50%",
      fontSize: "7px",
      fontWeight: "bold",
      padding: "0 2px",
      verticalAlign: "middle",
      marginLeft: "2px",

    },
   }
  );  
 
  type ErrorType = {
    [key: string]: string;
  };
  
  type CustomerContactProps ={ 
    customer: Customer;
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>; 
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  };

const CustomerContact:React.FC =()=>{   
const { customer, error, setError, handleFormChange } = React.useContext(CustomerContext) as CustomerContactProps;
  
const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const classes = useStyles();


    return(
        <React.Fragment>    
          <div className={classes.formInput}> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>Email 
              <span className={classes.formInputBoxEmailNo}>1</span>
              </FormLabel>
              <TextField
                  name="email"
                  id= "email"               
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}   
                  onChange= {handleFormChange}
                  helperText={error.email}
                  error={Boolean(error.email)}                          
    	            InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}                 
              /> 

              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>Email 
              <span className={classes.formInputBoxEmailNo}>2</span>
              </FormLabel>
              <TextField
                  name="email1"
                  id= "email1"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                  onChange= {handleFormChange}
                  helperText={error.email1}
                  error={Boolean(error.email1)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>Email<span className={classes.formInputBoxEmailNo}>3</span></FormLabel>
              <TextField
                  name="email2"
                  id= "email2"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}      
                  onChange= {handleFormChange}
                  helperText={error.email2}
                  error={Boolean(error.email2)}                          
    	            InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>remarks</FormLabel>
              <TextField 
                  name="remarks"
                  id= "remarks"
                  multiline
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                  onChange={handleFormChange}
                  helperText={error.remarks}
                  style={{height: "40px"}}
                  error={Boolean(error.remarks)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '2px'}}}            
              />      
            </div>        
        </React.Fragment>
    )
}

export default CustomerContact;

 



 