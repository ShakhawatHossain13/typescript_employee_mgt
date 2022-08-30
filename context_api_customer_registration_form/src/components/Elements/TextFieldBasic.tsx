import React from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import { SearchOutlined } from '@material-ui/icons';
import FormLabel from '@material-ui/core/FormLabel';   
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
      '@media screen and (max-width: 360px)': {
        gridColumn: "6",
      }
    },
    formInputLabelFour: {
      gridColumn: "6",
      '@media screen and (max-width: 360px)': {
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
      height: "25px",
      fontSize: "12px",
      backgroundColor: "#fff",
      
      WebkitBoxShadow: "0 0 0 0px white inset",
      "& .MuiFormHelperText-root": {
        marginTop: "-5px",
        fontSize: "11px",
        padding: "0 9px",
        width: "200px",
      },
    },
    formInputBoxOne: {
      gridColumn: "2/4",
      width: "100%",
      '@media screen and (max-width: 360px)': {
        width: "100%",
        gridColumn: "2/5",
      }
    },
    formInputBoxTwo: {
      gridColumn: "5",
      '@media screen and (max-width: 360px)': {
        width: "100%",
        gridColumn: "7/8",
      }
    },
    formInputBoxFour: {
      gridColumn: "7/9",
      '@media screen and (max-width: 360px)': {
        gridColumn: "2/6",
      }
    },
    formInputBoxFive: {
      gridColumn: "2",
      '@media screen and (max-width: 360px)': {
        gridColumn: "2/6",
      }
    },
    searchIcon: {
      border: "1px solid #000",
      borderRadius: "50%",
      fontSize: "20px",
      padding: "2px",
      gridColumn: "4",
      marginLeft: "40px",
      backgroundColor: "#fff",
      textAlign: "right",
      '@media screen and (max-width: 360px)': {
        gridColumn: "6",
      }
    },
    formInputRequired: {
      color: "#ff0000",
      marginLeft: "2px"
    },
  }
  );
 
type TextFieldBasicProps ={   
    name:string;
    id:string;
    text:string;  
    value: string;
    error: string;
    inputLabelWidth: string; 
    inputBoxWidth:string;
    gridLabel:string;
    gridBox:string;
    RequiredFieldClass:string;
    requiredFieldText?: string
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
 
const TextFieldBasic:React.FC<TextFieldBasicProps>=({name, id, text, value, error, inputLabelWidth, inputBoxWidth,gridLabel, gridBox, RequiredFieldClass, requiredFieldText, handleFormChange})=>{   
   const classes = useStyles();
    return(
        <React.Fragment>     
             <FormLabel style={{width: inputLabelWidth, gridColumn: gridLabel}} className={`${classes.formInputLabel} `}>{text}<span className={RequiredFieldClass}>{requiredFieldText}</span></FormLabel>
              <TextField
                  name={name}
                  id= {id}
                  value={value}
                  className={`${classes.formInputBox}`}             
                  onChange={handleFormChange}
                  style={{width: inputBoxWidth, gridColumn: gridBox}} 
                  helperText={error}
                  error={Boolean(error)}                          
                  InputProps={{disableUnderline: true, style: {fontSize: '12px'}}}            
              />        
        </React.Fragment>
    )
}
export default TextFieldBasic;

 



 