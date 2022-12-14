import React from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';  
import { CustomerContext } from "../../contexts/CustomerContext"; 
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { relative } from "node:path/win32";

const useStyles = makeStyles({
    formInput: {            
      margin: "0 auto",
      padding: "10px",    
      gridColumn: "1/9",  
      display: "grid",     
      gridTemplateColumns:"repeat(8, 1fr)",  
      border: "1px solid #000", 
      marginBottom: "15px",
      position: "relative",
    }, 
    formInputLabel: {       
      fontFamily: "'Times New Roman', Times, serif", 
      padding: "6px 0", 
      textAlign: "left", 
      fontSize: "12px",
      color: "#000", 
      width: "125px",
    }, 
    formInputLabelOne: {      
      gridColumn: "1",  
    }, 
    start:{
    // gridRowStart:"4",
    },    
    formInputBox: {          
      fontFamily: "'Times New Roman', Times, serif",
      border: '1px solid #000',
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
      gridColumn: "2 / 4",
     }, 
     formInputRequired:{
      color: "#ff0000",
      marginLeft: "2px"
    },
    formInputModalButton: {
      border: '1px solid #000',
      borderRadius: '50%',
      padding: "0",
      marginBottom: "5px",
      height: "25px",
      backgroundColor: "#fff",
      width: "25px",
      position: "absolute",
      top: "37%",
      right: "20px",    
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
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' }}}            
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne} ${classes.start}`}>black information note</FormLabel>                       
              <button type="button"   className={`${classes.formInputModalButton}`}><MoreHorizIcon /></button>
            </div>        
        </React.Fragment>
    )
}
export default CustomerContact;

 



 