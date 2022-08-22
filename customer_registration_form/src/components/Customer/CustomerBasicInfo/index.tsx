import React from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import { SearchOutlined } from '@material-ui/icons';
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
      marginBottom: "12px",
      height:"25px",
      fontSize: "12px",
      backgroundColor: "#fff",      
      "& .MuiFormHelperText-root": {         
        marginTop: "-4px",
      },
       
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
    formInputBoxFive: {          
      gridColumn: "2", 
    }, 
    searchIcon :{
      border: "1px solid #000",
      borderRadius: "50%",
      fontSize: "20px",
      padding: "2px",
      gridColumn: "4", 
      marginLeft: "10px",
      backgroundColor: "#fff",
    },
    formInputRequired:{
      color: "#ff0000",
      marginLeft: "2px"
    },
   }
  );  
  type ErrorType = {
    [key: string]: string;
  };
  type CustomerBasicInfoProps ={ 
    customer: Customer;
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>;
    setCustomer : React.Dispatch<React.SetStateAction<Customer>>;
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  };
const CustomerBasicInfo:React.FC<CustomerBasicInfoProps> =({customer, error, setError, setCustomer, handleFormChange})=>{   
const phoneRegex = "^[0-9-]+$|^$";          
const classes = useStyles();
    return(
        <React.Fragment>     
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Phone</FormLabel>
              <TextField
                  name="tel"
                  id= "tel" 
                  type="tel"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}  
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.target.value.match(phoneRegex)) {
                      return handleFormChange(event);
                    } else{
                      setError((prev) => ({
                        ...prev,
                        [error.tel]: "Invalid",
                      }));
                    }
                  }}  
                  helperText={error.tel}
                  error={Boolean(error.tel)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , paddingBottom: '0px' }}}            
              />     
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Your name<span className={classes.formInputRequired}>*</span></FormLabel>
              <TextField
                  name="name"
                  id= "name"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}     
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
                  onChange={handleFormChange}
                  helperText={error.sortcode}
                  error={Boolean(error.sortcode)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>T</FormLabel>
              <TextField
                  name="search"
                  id= "search"
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}   
                  onChange={handleFormChange}
                  helperText={error.search}
                  error={Boolean(error.search)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <SearchOutlined className={classes.searchIcon} />  
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelFour}`}>service level</FormLabel>
              <TextField
                  name="serviceLevel"
                  id= "serviceLevel" 
                  className={`${classes.formInputBox} ${classes.formInputBoxFour}`} 
                  onChange={handleFormChange}
                  helperText={error.serviceLevel}
                  error={Boolean(error.serviceLevel)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Prefectures</FormLabel>
              <TextField
                  name="prefectures"
                  id= "prefectures"
                  className={`${classes.formInputBox} ${classes.formInputBoxFive}`}   
                  onChange={handleFormChange}
                  helperText={error.prefectures}
                  error={Boolean(error.prefectures)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              /> 
              <FormLabel  className={ `${classes.formInputLabel} ${classes.formInputLabelFour}`}>group code</FormLabel>
              <TextField
                  name="groupCode"
                  id= "groupCode" 
                  className={`${classes.formInputBox} ${classes.formInputBoxFour}`}   
                  onChange={handleFormChange}
                  helperText={error.groupCode}
                  error={Boolean(error.groupCode)}                  
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
              />             
        </React.Fragment>
    )
}

export default CustomerBasicInfo;

 



 