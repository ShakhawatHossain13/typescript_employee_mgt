import React, {FormEvent} from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField, TextareaAutosize } from "@material-ui/core"; 
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';
  
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
      marginBottom: "5px",
      height: "25px",      
      backgroundColor: "#fff",
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
   }
  );  
 
  type ErrorType = {
    [key: string]: string;
  };
  
  type CustomerContactProps ={ 
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>; 
    setCustomer : React.Dispatch<React.SetStateAction<Customer>>
  };

const CustomerContact:React.FC<CustomerContactProps> =({error, setError, setCustomer})=>{       
   
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

const classes = useStyles();
    return(
        <React.Fragment>    
          <div className={classes.formInput}> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>Email</FormLabel>
              <TextField
                  name="email"
                  id= "email"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}  
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.email}
                  error={Boolean(error.email)}                          
    	            InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}                 
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>Email 1</FormLabel>
              <TextField
                  name="email1"
                  id= "email1"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}                 
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.email1}
                  error={Boolean(error.email1)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>Email 2</FormLabel>
              <TextField
                  name="email2"
                  id= "email2"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}         
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.email2}
                  error={Boolean(error.email2)}                          
    	            InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>remarks</FormLabel>
              <TextField 
                  name="remarks"
                  id= "remarks"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}         
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.remarks}
                  error={Boolean(error.remarks)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              />   
            </div>        
        </React.Fragment>
    )
}

export default CustomerContact;

 



 