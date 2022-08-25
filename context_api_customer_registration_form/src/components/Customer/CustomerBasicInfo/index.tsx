import React from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import { SearchOutlined } from '@material-ui/icons';
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';
import { CustomerContext } from "../../contexts/CustomerContext"; 
import TextFieldBasic from "../../Elements/TextFieldBasic";
 
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
      '@media screen and (max-width: 360px)' : {       
        gridColumn: "6", 
    }  
    }, 
    formInputLabelFour: {      
      gridColumn: "6", 
      '@media screen and (max-width: 360px)' : {       
        gridColumn: "1", 
    }  
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
      width: "80%",   
      "& .MuiFormHelperText-root": {         
        marginTop: "-6px",
        fontSize:"11px",              
        padding: "0 7px",
      },
    }, 
    formInputBoxOne: {  
      gridColumn: "2/4",
      '@media screen and (max-width: 360px)' : {
        width: "100%",  
        gridColumn: "2/5", 
    } 
     },
    formInputBoxTwo: {          
      gridColumn: "5", 
      '@media screen and (max-width: 360px)' : {
        width: "100%",  
        gridColumn: "7/8", 
    } 
    }, 
    formInputBoxFour: {          
      gridColumn: "7/9", 
      '@media screen and (max-width: 360px)' : {       
        gridColumn: "2/6", 
    } 
    }, 
    formInputBoxFive: {          
      gridColumn: "2", 
      '@media screen and (max-width: 360px)' : {       
        gridColumn: "2/6", 
    } 
    }, 
    searchIcon :{
      border: "1px solid #000",
      borderRadius: "50%",
      fontSize: "20px",
      padding: "2px",
      gridColumn: "4", 
      marginLeft: "10px",
      backgroundColor: "#fff",
      textAlign: "right",
      '@media screen and (max-width: 360px)' : {     
        gridColumn: "6", 
    } 
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
const CustomerBasicInfo:React.FC=()=>{    

const { customer, error, setError, handleFormChange } = React.useContext(CustomerContext) as CustomerBasicInfoProps;
  
const phoneRegex = "^[0-9-]+$|^$";   
const postalRegex = "^[0-9-]+$|^$";

const classes = useStyles();
    return(
        <React.Fragment>     
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Phone</FormLabel>
              <TextField
                  name="tel"
                  id= "tel"                  
                  value={customer?.tel}
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
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' }}}            
              />      
              <TextFieldBasic 
                name="name"
                id= "name"
                text="Your name"
                value={customer?.name}
                error={error?.name} 
                Fclasses={`${classes.formInputLabel} ${classes.formInputLabelOne}`} 
                Tclasses={`${classes.formInputBox} ${classes.formInputBoxOne}`}
                RequiredFieldClass={classes.formInputRequired}
                RequiredFieldText = {"*"}
                handleFormChange={handleFormChange}
              />             
              <TextFieldBasic 
                name="title"
                id= "title"
                text="Title"
                value={customer?.title}
                error={error?.title} 
                Fclasses={`${classes.formInputLabel} ${classes.formInputLabelTwo}`} 
                Tclasses={`${classes.formInputBox} ${classes.formInputBoxTwo}`}
                RequiredFieldClass={classes.formInputRequired}
                RequiredFieldText = {""}
                handleFormChange={handleFormChange}
              /> 
              <TextFieldBasic 
                name="furigana"
                id= "furigana"
                text="Furigana"
                value={customer?.furigana}
                error={error?.furigana} 
                Fclasses={`${classes.formInputLabel} ${classes.formInputLabelOne}`} 
                Tclasses={`${classes.formInputBox} ${classes.formInputBoxOne}`}
                RequiredFieldClass={classes.formInputRequired}
                RequiredFieldText = {""}
                handleFormChange={handleFormChange}
              />    


              <TextFieldBasic 
                name="sortcode"
                id= "sortcode"
                text="Sort code"
                value={customer?.sortcode}
                error={error?.sortcode} 
                Fclasses={`${classes.formInputLabel} ${classes.formInputLabelFour}`} 
                Tclasses={`${classes.formInputBox} ${classes.formInputBoxFour}`}
                RequiredFieldClass={classes.formInputRequired}
                RequiredFieldText = {""}
                handleFormChange={handleFormChange}
              />
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>T</FormLabel>
              <TextField
                  name="search"
                  id= "search"                  
                  value={customer?.search}
                  className={`${classes.formInputBox} ${classes.formInputBoxOne}`}  
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.target.value.match(postalRegex)) {
                      return handleFormChange(event);
                    } else{
                      setError((prev) => ({
                        ...prev,
                        [error.search]: "Invalid",
                      }));
                    }
                  }}  
                  helperText={error.search}
                  error={Boolean(error.search)}                          
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' }}}            
              />  
              <SearchOutlined className={classes.searchIcon} />    
              <TextFieldBasic 
                  name="serviceLevel"
                  id= "serviceLevel"
                  text="Service level"
                  value={customer?.serviceLevel}
                  error={error?.serviceLevel} 
                  Fclasses={`${classes.formInputLabel} ${classes.formInputLabelFour}`} 
                  Tclasses={`${classes.formInputBox} ${classes.formInputBoxFour}`}
                  RequiredFieldClass={classes.formInputRequired}
                  RequiredFieldText = {""}
                  handleFormChange={handleFormChange}
                />             
              <TextFieldBasic 
                  name="prefectures"
                  id= "prefectures"
                  text="Prefectures"
                  value={customer?.prefectures}
                  error={error?.prefectures} 
                  Fclasses={`${classes.formInputLabel} ${classes.formInputLabelOne}`} 
                  Tclasses={`${classes.formInputBox} ${classes.formInputBoxFive}`}
                  RequiredFieldClass={classes.formInputRequired}
                  RequiredFieldText = {""}
                  handleFormChange={handleFormChange}
                />              
              <TextFieldBasic 
                  name="groupCode"
                  id= "groupCode"
                  text="Group code"
                  value={customer?.groupCode}
                  error={error?.groupCode} 
                  Fclasses={`${classes.formInputLabel} ${classes.formInputLabelFour}`} 
                  Tclasses={`${classes.formInputBox} ${classes.formInputBoxFour}`}
                  RequiredFieldClass={classes.formInputRequired}
                  RequiredFieldText = {""}
                  handleFormChange={handleFormChange}
              />        
        </React.Fragment>
    )
}

export default CustomerBasicInfo;

 



 