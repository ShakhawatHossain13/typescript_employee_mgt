import React, {FormEvent} from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';  

const useStyles = makeStyles({
    formInput: {      
      width: "97%",
      margin: "0 auto",
      padding: "10px",    
      gridColumn: "1/9",  
      display: "grid",     
      gridTemplateColumns:"repeat(8, 1fr)",  
      border: "1px solid #000", 
    }, 
    formInputLabel: {       
      fontFamily: "'Times New Roman', Times, serif", 
      padding: "6px 0", 
      textAlign: "left", 
      fontSize: "12px",
      color: "#000",
    }, 
    formInputLabelOne: {      
      gridColumn: "1/2",  
    }, 
    start:{
    // gridRowStart:"4",
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
      gridColumn: "2 / 4",
     }, 
   }
  );   
  type ErrorType = {
    [key: string]: string;
  };  
  type CustomerContactProps ={ 
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>;
    setCustomer : React.Dispatch<React.SetStateAction<Customer>>;
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  };

const CustomerContact:React.FC<CustomerContactProps> =({error, setError, setCustomer, handleFormChange})=>{          
const classes = useStyles();
    return(
        <React.Fragment>    
          <div className={classes.formInput}>            
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>black information</FormLabel>
              <TextField
                  name="blackInfo"
                  id= "blackInfo"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}  
                  onChange={handleFormChange}
                  helperText={error.blackInfo}
                  error={Boolean(error.blackInfo)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>black information note</FormLabel>                       
            </div>        
        </React.Fragment>
    )
}
export default CustomerContact;

 



 