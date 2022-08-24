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
      marginBottom: "5px",
      height:"25px",
      fontSize: "12px",
      backgroundColor: "#fff",      
      "& .MuiFormHelperText-root": {         
        marginTop: "-4px",
        fontSize:"11px",
        position: "absolute",
        top: "6px",
        right:"-26px",
        fontWeight: "900",
        border: "1px solid red",
        borderRadius: "50%",
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

  const { customer } = React.useContext(CustomerContext) as CustomerBasicInfoProps;
  const { error } = React.useContext(CustomerContext) as CustomerBasicInfoProps;
  const { setError } = React.useContext(CustomerContext) as CustomerBasicInfoProps; 
  const { handleFormChange } = React.useContext(CustomerContext) as CustomerBasicInfoProps;

  const name : string[]= [
   "name",
   "title",
  "furigana",
   "sortcode",
   "search",
   "serviceLevel",
   "prefectures",
   "groupCode",
  ]
  const id = {
    name:"name",
    title:"title",
    furigana:"furigana",
    sortcode:"sortcode",
    search:"search",
    serviceLevel:"serviceLevel",
    prefectures:"prefectures",
    groupCode:"groupCode",
   }
  
const phoneRegex = "^[0-9-]+$|^$";          
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
                  InputProps={{ disableUnderline: true, style: { fontSize: '12px' , paddingBottom: '0px' }}}            
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
              <TextFieldBasic 
                  name="search"
                  id= "search"
                  text="T"
                  value={customer?.search}
                  error={error?.search} 
                  Fclasses={`${classes.formInputLabel} ${classes.formInputLabelOne}`} 
                  Tclasses={`${classes.formInputBox} ${classes.formInputBoxOne}`}
                  RequiredFieldClass={classes.formInputRequired}
                  RequiredFieldText = {""}
                  handleFormChange={handleFormChange}
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

 



 