import React from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import { SearchOutlined } from '@material-ui/icons';
import FormLabel from '@material-ui/core/FormLabel';  


const useStyles = makeStyles({
   
      formInputWrapper:{
        width:"100%",
      },
      formInputLabel: {       
        fontFamily: "'Times New Roman', Times, serif",       
        textAlign: "right", 
        fontSize: "12px",
        color: "#000",   
        display: "inline-block",
        width:"65px",   
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
    
      formInputBoxEmailNo:{
        border: "1px solid #000",
        borderRadius: "50%",
        fontSize: "7px",
        fontWeight: "bold",
        padding: "0 2px",
        verticalAlign: "middle",
        marginLeft: "2px",
      },
      formInputRequired:{
        color: "#ff0000",
        marginLeft: "2px"
      },
     }
    );  
   
 
type CCEmailInputProps ={   
    name:string;
    id:string;
    text:string;  
    no: string,
    inputBoxWidth: string,
    value: string;
    error: string;
    RequiredFieldText: string
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
    // material ui - 
    // extend
  };
 
const CCEmailInput:React.FC<CCEmailInputProps>=({name, id, text, no,inputBoxWidth, value, error, RequiredFieldText, handleFormChange})=>{   
    const classes = useStyles();
    return(
        <React.Fragment>                
            <div className={classes.formInputWrapper}>           
                <FormLabel  className={`${classes.formInputLabel}`} >{text} 
                <span className={classes.formInputBoxEmailNo}>{no}</span>
                <span className={classes.formInputRequired}>{RequiredFieldText}</span>            
                </FormLabel>           
                <TextField
                    name={name}
                    id= {id}        
                    value={value}     
                    className={`${classes.formInputBox}`}   
                    onChange= {handleFormChange}
                    helperText={error}
                    error={Boolean(error)}                          
                    style={{width: inputBoxWidth}}
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px',}}}                 
                /> 
            </div>
        </React.Fragment>
    )
}
export default CCEmailInput;

 



 