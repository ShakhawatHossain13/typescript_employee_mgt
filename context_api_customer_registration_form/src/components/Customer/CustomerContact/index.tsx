import React from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField} from "@material-ui/core"; 
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';
import { CustomerContext } from "../../contexts/CustomerContext"; 
import CCEmailInput from "../../Elements/CCEmailInput";
  
const useStyles = makeStyles({
  formInput: {     
      backgroundColor:"palegreen",
      margin: "0 auto",
      padding: "10px",    
      gridColumn: "1/9",  
      width:"97%", 
    }, 
    formInputWrapper:{
      width:"100%",
    },
    formInputLabel: {       
      fontFamily: "'Times New Roman', Times, serif",       
      textAlign: "right", 
      fontSize: "12px",
      color: "#000",   
      display: "inline-block", 
    },     
    formInputBox: {          
      fontFamily: "'Times New Roman', Times, serif",
      border: '1px solid #000',
      marginLeft: "12px",
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
   }
  );  
 
  type ErrorType = {
    [key: string]: string;
  };
  
  type CustomerContactProps ={ 
    customer: Customer;
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>; 
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };

const CustomerContact:React.FC =()=>{   
const { customer, error, setError, handleFormChange } = React.useContext(CustomerContext) as CustomerContactProps;
  
const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const classes = useStyles();


    return(
        <React.Fragment>    
          <div className={classes.formInput}>         
              <CCEmailInput 
                    name="email"
                    id= "email"
                    text="Email"
                    no="1"
                    inputBoxWidth="60%"
                    inputLabelWidth="70px"
                    value={customer?.email}
                    error={error?.email}               
                    requiredFieldText = {"*"}
                    handleFormChange={handleFormChange}
                  />   
                <CCEmailInput 
                    name="email1"
                    id= "email1"
                    text="Email"
                    no="2"
                    inputBoxWidth="60%"
                    inputLabelWidth="70px"
                    value={customer?.email1}
                    error={error?.email1}               
                    requiredFieldText = {"*"}
                    handleFormChange={handleFormChange}
                  />
                <CCEmailInput 
                    name="email2"
                    id= "email2"
                    text="Email"
                    no="3"
                    inputBoxWidth="60%"
                    inputLabelWidth="70px"
                    value={customer?.email2}
                    error={error?.email2}               
                    requiredFieldText = {"*"}
                    handleFormChange={handleFormChange}
                  />         
                <div className={classes.formInputWrapper}>
                  <FormLabel  className={`${classes.formInputLabel}` } style={{width: "70px"}} >remarks</FormLabel>
                  <TextField 
                      name="remarks"
                      id= "remarks"
                      multiline
                      className={`${classes.formInputBox}`}    
                      onChange={handleFormChange}
                      helperText={error.remarks}
                      style={{height: "40px", width:"60%"}}
                      error={Boolean(error.remarks)}                          
                      InputProps={{ disableUnderline: true, style: { fontSize: '12px' }}}            
                  />      
                  </div>    
            </div>    
        </React.Fragment>
    )
}

export default CustomerContact;

 



 