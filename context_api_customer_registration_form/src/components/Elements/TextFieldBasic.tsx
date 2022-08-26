import React from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import { SearchOutlined } from '@material-ui/icons';
import FormLabel from '@material-ui/core/FormLabel';  
 
type TextFieldBasicProps ={   
    name:string;
    id:string;
    text:string;  
    value: string;
    error: string;
    Fclasses: string;
    Tclasses: string;
    RequiredFieldClass:string;
    RequiredFieldText: string
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
 
const TextFieldBasic:React.FC<TextFieldBasicProps>=({name, id, text, value, error, Fclasses, Tclasses, RequiredFieldClass, RequiredFieldText, handleFormChange})=>{   
    return(
        <React.Fragment>     
             <FormLabel className={Fclasses}>{text}<span className={RequiredFieldClass}>{RequiredFieldText}</span></FormLabel>
              <TextField
                  name={name}
                  id= {id}
                  value={value}
                  className={Tclasses}                 
                  onChange={handleFormChange}
                  helperText={error}
                  error={Boolean(error)}                          
                  InputProps={{disableUnderline: true, style: {fontSize: '12px'}}}            
              />        
        </React.Fragment>
    )
}
export default TextFieldBasic;

 



 