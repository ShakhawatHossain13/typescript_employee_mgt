import React, { FormEvent} from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';
 
const useStyles = makeStyles({   
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
      gridColumn: "4",  
    }, 
    formInputLabelFour: {      
      gridColumn: "6",  
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
      backgroundColor: "#fff",
    }, 
    formInputBoxOne: {  
      gridColumn: "2/4",
     },
    formInputBoxTwo: {          
      gridColumn: "5", 
    }, 
    formInputBoxFour: {          
      gridColumn: "7/9", 
    }, 
   }
  );  
  type ErrorType = {
    [key: string]: string;
  };
  type CustomerBasicInfoProps ={ 
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>;
    setCustomer : React.Dispatch<React.SetStateAction<Customer>>
  };
const CustomerBasicInfo:React.FC<CustomerBasicInfoProps> =({error, setError, setCustomer})=>{      
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
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Phone</FormLabel>
              <TextField
                  name="tel"
                  id= "tel"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}            
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.tel}
                  error={Boolean(error.tel)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              />      

              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Your name</FormLabel>
              <TextField
                  name="name"
                  id= "name"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}     
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.name}
                  error={Boolean(error.name)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelTwo}`}>title</FormLabel>
              <TextField
                  name="title"
                  id= "title" 
                  className={`${classes.formInputBox} ${classes.formInputBoxTwo}`}    
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.title}
                  error={Boolean(error.title)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Furigana</FormLabel>
              <TextField
                  name="furigana"
                  id= "furigana"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}     
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.furigana}
                  error={Boolean(error.furigana)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelFour}`}>sort code</FormLabel>
              <TextField
                  name="sortcode"
                  id= "sortcode" 
                  className={`${classes.formInputBox} ${classes.formInputBoxFour}`}     
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.sortcode}
                  error={Boolean(error.sortcode)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelFour}`}>service level</FormLabel>
              <TextField
                  name="serviceLevel"
                  id= "serviceLevel" 
                  className={`${classes.formInputBox} ${classes.formInputBoxFour}`}     
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.serviceLevel}
                  error={Boolean(error.serviceLevel)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={ `${classes.formInputLabel} ${classes.formInputLabelFour}`}>group code</FormLabel>
              <TextField
                  name="groupCode"
                  id= "groupCode" 
                  className={`${classes.formInputBox} ${classes.formInputBoxFour}`}     
                  required={true}
                  onChange={handleFormChange}
                  helperText={error.groupCode}
                  error={Boolean(error.groupCode)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              />             
        </React.Fragment>
    )
}

export default CustomerBasicInfo;

 



 