import React, { FormEvent} from "react" ;
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
      gridRowStart: "",
      display: "grid",     
      gridTemplateColumns:"repeat(8, 1fr)",  
      border: "1px solid #000",
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
    formInputLabelTwo: {      
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
      fontSize: "12px",
    }, 
    formInputBoxOne: {  
      gridColumn: "2/5",
     },
    formInputBoxTwo: {          
      gridColumn: "6", 
    }, 
   }
  );  
  type ErrorType = {
    [key: string]: string;
  };
  type CustomerSupplimentaryInfoProps ={ 
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>;
    setCustomer : React.Dispatch<React.SetStateAction<Customer>>
  };
const CustomerSupplimentaryInfo:React.FC<CustomerSupplimentaryInfoProps> =({error, setError, setCustomer})=>{      
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
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>region code</FormLabel>
                <TextField
                    name="regionCode"
                    id= "regionCode"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                    required={true}
                    onChange={handleFormChange}
                    helperText={error.regionCode}
                    error={Boolean(error.regionCode)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />      
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>gender</FormLabel>
                <TextField
                    name="gender"
                    id= "gender"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                    required={true}
                    onChange={handleFormChange}
                    helperText={error.gender}
                    error={Boolean(error.gender)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />   
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>age</FormLabel>
                <TextField
                    name="age"
                    id= "age"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                    required={true}
                    onChange={handleFormChange}
                    helperText={error.age}
                    error={Boolean(error.age)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 

              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Customer Factor</FormLabel>
                <TextField
                    name="customerFactor"
                    id= "customerFactor"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                    required={true}
                    onChange={handleFormChange}
                    helperText={error.customerFactor}
                    error={Boolean(error.customerFactor)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />      
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Clarification Code</FormLabel>
                <TextField
                    name="clarificationCode"
                    id= "clarificationCode"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                    required={true}
                    onChange={handleFormChange}
                    helperText={error.clarificationCode}
                    error={Boolean(error.clarificationCode)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />   
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Order category</FormLabel>
                <TextField
                    name="orderCategory"
                    id= "orderCategory"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                    required={true}
                    onChange={handleFormChange}
                    helperText={error.orderCategory}
                    error={Boolean(error.orderCategory)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Last stroe CD</FormLabel>
                <TextField
                    name="lastStoreCd"
                    id= "lastStoreCd"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                    required={true}
                    onChange={handleFormChange}
                    helperText={error.lastStoreCd}
                    error={Boolean(error.lastStoreCd)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>custtomer rank</FormLabel>
                <TextField
                    name="customerRank"
                    id= "customerRank"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                    required={true}
                    onChange={handleFormChange}
                    helperText={error.customerRank}
                    error={Boolean(error.customerRank)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>credit registration</FormLabel>
                <TextField
                    name="customerRank"
                    id= "customerRank"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                    required={true}
                    onChange={handleFormChange}
                    helperText={error.customerRank}
                    error={Boolean(error.customerRank)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />      
            <div>

            </div>
          </div>
                     
        </React.Fragment>
    )
}

export default CustomerSupplimentaryInfo;

 



 