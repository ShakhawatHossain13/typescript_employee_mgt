import React, { FormEvent} from "react" ;
import { makeStyles, createStyles} from "@material-ui/core";  
import { FormControl , RadioGroup, Radio, FormControlLabel,Typography} from "@material-ui/core"; 
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';
 
const useStyles = makeStyles((theme)=>
  createStyles( {   
      formInput: {      
        width: "97%",
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
        marginTop: '16px',
      }, 
      formInputLabelOne: {      
        gridColumn: "1",  
      }, 
      formInputLabelTwo: {      
        gridColumn: "3/5",  
      }, 
      formInputBox: {          
        fontFamily: "'Times New Roman', Times, serif",  
        fontSize: "12px",
        backgroundColor: "#fff",
      }, 
      formInputViewOne: {  
        gridColumn: "2",
      },
      formInputViewTwo: {          
        gridColumn: "5", 
      }, 
      formInputRadioButtonGroup: {          
        gridColumn: "7", 
        fontSize: "14px",
        textAlign:"right",
      }, 
      formInputRadioButton:{
        padding: '3px',
      },
    })
    );  
  type ErrorType = {
    [key: string]: string;
  };
  type CustomerHeadProps ={ 
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>;
    setCustomer : React.Dispatch<React.SetStateAction<Customer>>;
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  };
const CustomerHead:React.FC<CustomerHeadProps> =({error, setError, setCustomer,handleFormChange})=>{      
const classes = useStyles();
    return(
        <React.Fragment>     
          <div className={classes.formInput}>
              <FormLabel  
                className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>
                  Customer code:</FormLabel>
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputViewOne}`}>001</FormLabel>               
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelTwo}`}>Online customer ID:</FormLabel>               
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputViewTwo}`}>01</FormLabel>
              <FormControl component="fieldset" className={`${classes.formInputRadioButtonGroup}`}>            
                <RadioGroup aria-label="type" name="type"  onChange={handleFormChange}>
                  <FormControlLabel 
                    value="personal"                 
                    control={<Radio  size="small" color="primary" className={classes.formInputRadioButton}/>} 
                    label={<Typography className={classes.formInputBox}>personal</Typography>}
                   />
                  <FormControlLabel  
                    value="corporation" 
                    control={<Radio size="small" color="primary" className={classes.formInputRadioButton}/>} 
                    label={<Typography className={classes.formInputBox}>Corporation</Typography>}
                  />          
                </RadioGroup>
              </FormControl>    
          </div>          
        </React.Fragment>
    )
}

export default CustomerHead;

 



 