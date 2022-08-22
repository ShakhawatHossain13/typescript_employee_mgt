import React, { FormEvent} from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import { SearchOutlined } from '@material-ui/icons';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControl , RadioGroup, Radio, FormControlLabel, Typography } from "@material-ui/core"; 
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
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
      gridTemplateColumns:"repeat(2, 1fr)",  
      border: "1px solid #000",
    }, 
    formInputTitle:{
      fontFamily: "'Times New Roman', Times, serif", 
      padding: 0,
      margin: 0,
      fontSize: "14px",
      gridColumn: "1/5"
    },
    formInputGrid1:{
      display: "grid",     
      gridTemplateColumns:"repeat(4, 1fr)",  
    },
    formInputGrid2:{
      display: "grid",     
      gridTemplateColumns:"repeat(4, 1fr)",  
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
    formInputLabelThree: {      
      gridColumn: "2",   
      fontSize: "14px",
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
      gridColumn: "2",
     },
    formInputBoxTwo: {          
      gridColumn: "2/4", 
    }, 
    formInputBoxThree:{
      gridColumn: "2/5", 
    },
    formInputRequired:{
      color: "#ff0000",
      marginLeft: "2px",
    },
    formInputRadioButtonGroup: {          
      marginLeft: "25px",
      fontSize: "14px",     
      display: "grid",
      gridTemplateColumns:"repeat(2, 1fr)",  
    }, 
    formInputRadioButton1:{
      padding: '3px',
      gridColumn: "1", 
    },
    formInputRadioButton2:{
      padding: '3px',
      gridColumn: "2", 
    },
    formInputRadioButtonText:{
      fontFamily: "'Times New Roman', Times, serif",  
      fontSize: "12px",
      backgroundColor: "#fff",
    },
    formInputPercentage:{
      marginLeft: "10px",
    },
    formInputCheckBox:{     
      gridColumn: "1/5",
      display: "grid",
      gridTemplateColumns:"repeat(2, 1fr)",         
    },
    formInputCheckBoxText:{
      fontFamily: "'Times New Roman', Times, serif !important",  
      fontSize: "12px",
    },    
    searchIcon :{
      border: "1px solid #000",
      borderRadius: "50%",
      fontSize: "20px",
      padding: "2px",
      gridColumn: "4", 
      marginLeft: "10px"
    },
   }
  );  
  type ErrorType = {
    [key: string]: string;
  };
  type CustomerSupplimentaryInfoProps ={ 
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>;
    setCustomer : React.Dispatch<React.SetStateAction<Customer>>;
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  };
const CustomerSupplimentaryInfo:React.FC<CustomerSupplimentaryInfoProps> =({error, setError, setCustomer, handleFormChange})=>{      
 
const classes = useStyles();
    return(
        <React.Fragment>   
          <div className={classes.formInput}>    
          <div className={classes.formInputGrid1}>
                <h5 className={classes.formInputTitle}>Customer Supplimentary Information</h5>
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>region code</FormLabel>
                <TextField
                    name="regionCode"
                    id= "regionCode"
                    className={`${classes.formInputBox} ${classes.formInputBoxTwo}`}    
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
                    onChange={handleFormChange}
                    helperText={error.age}
                    error={Boolean(error.age)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 

              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Factor<span className={classes.formInputRequired}>*</span></FormLabel>
                <TextField
                    name="customerFactor"
                    id= "customerFactor"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}   
                    onChange={handleFormChange}
                    helperText={error.customerFactor}
                    error={Boolean(error.customerFactor)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />      
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Clarification Code<span className={classes.formInputRequired}>*</span></FormLabel>
                <TextField
                    name="clarificationCode"
                    id= "clarificationCode"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}     
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
                    onChange={handleFormChange}
                    helperText={error.orderCategory}
                    error={Boolean(error.orderCategory)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                 <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Classification code</FormLabel>
                <TextField
                    name="classification"
                    id= "classification"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                    onChange={handleFormChange}
                    helperText={error.classification}
                    error={Boolean(error.classification)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Last stroe CD</FormLabel>
                <TextField
                    name="lastStoreCd"
                    id= "lastStoreCd"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}   
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
                    onChange={handleFormChange}
                    helperText={error.customerRank}
                    error={Boolean(error.customerRank)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />   
                <h5 className={classes.formInputTitle}>Rejection Management</h5> 
                <FormGroup className={classes.formInputCheckBox} >                     
                    <FormControlLabel                  
                      control={
                        <Checkbox              
                          onChange={handleFormChange}
                          name="dm"
                          color="primary"                          
                        />
                      }                     
                      label={<Typography className={classes.formInputCheckBoxText}>do not send DM</Typography>}
                    />
                     <FormControlLabel                       
                      control={
                        <Checkbox              
                          onChange={handleFormChange}
                          name="purchase"
                          color="primary"                        
                        />
                      }                      
                      label={<Typography className={classes.formInputCheckBoxText}>do not issue a purchase order</Typography>}
                    />                 
            </FormGroup>
            <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>First store CD</FormLabel>
            <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelThree}`}>call center</FormLabel>
            </div>
            <div className={classes.formInputGrid2}>
            <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>requester</FormLabel>
                <TextField
                    name="requester"
                    id= "requester"
                    className={`${classes.formInputBox} ${classes.formInputBoxTwo}`}    
                    onChange={handleFormChange}
                    helperText={error.requester}
                    error={Boolean(error.requester)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />      
                <SearchOutlined className={classes.searchIcon} />  
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>receipt</FormLabel>              
                <FormControl component="fieldset" >            
                  <RadioGroup aria-label="receipt" className={`${classes.formInputRadioButtonGroup}`} name="type"  onChange={handleFormChange}>
                    <FormControlLabel 
                      value="requirement" 
                      control={<Radio  size="small" color="primary" className={classes.formInputRadioButton1}/>} 
                      label={<Typography className={classes.formInputRadioButtonText}>requirement</Typography>}
                    />
                    <FormControlLabel  
                      value="dont"                       
                      control={<Radio size="small" color="primary" className={classes.formInputRadioButton2}/>} 
                      label={<Typography className={classes.formInputRadioButtonText}>don't want</Typography>}
                    />          
                  </RadioGroup>
                </FormControl>   
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Receipt address</FormLabel>
                <TextField
                    name="receiptAddress"
                    id= "receiptAddress"
                    className={`${classes.formInputBox} ${classes.formInputBoxTwo}`}  
                    onChange={handleFormChange}
                    helperText={error.receiptAddress}
                    error={Boolean(error.receiptAddress)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />   
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>discount rate</FormLabel>
                <TextField
                    name="discountRate"
                    id= "discountRate"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}   
                    onChange={handleFormChange}
                    helperText={error.age}
                    error={Boolean(error.age)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
               <span className={classes.formInputPercentage}>%</span>
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>discount rate memp</FormLabel>
                <TextField
                    name="discountRateMemo"
                    id= "discountRateMemo"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}   
                    onChange={handleFormChange}
                    helperText={error.discountRateMemo}
                    error={Boolean(error.discountRateMemo)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />      
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Urge to distinguish</FormLabel>
                <TextField
                    name="urgeToDistinguish"
                    id= "urgeToDistinguish"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}  
                    onChange={handleFormChange}
                    helperText={error.urgeToDistinguish}
                    error={Boolean(error.urgeToDistinguish)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />   
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Closing date classification</FormLabel>
                <TextField
                    name="closingDateClass"
                    id= "closingDateClass"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}  
                    onChange={handleFormChange}
                    helperText={error.closingDateClass}
                    error={Boolean(error.closingDateClass)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>generic 1</FormLabel>
                <TextField
                    name="customerGeneric1"
                    id= "customerGeneric1"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}     
                    onChange={handleFormChange}
                    helperText={error.customerGeneric1}
                    error={Boolean(error.customerGeneric1)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>generic 2</FormLabel>
                <TextField
                    name="customerGeneric2"
                    id= "customerGeneric2"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                    onChange={handleFormChange}
                    helperText={error.customerGeneric2}
                    error={Boolean(error.customerGeneric2)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>generic 3</FormLabel>
                <TextField
                    name="customerGeneric3"
                    id= "customerGeneric3"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                    onChange={handleFormChange}
                    helperText={error.customerGeneric3}
                    error={Boolean(error.customerGeneric3)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />     
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>generic 4</FormLabel>
                <TextField
                    name="customerGeneric4"
                    id= "customerGeneric4"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`} 
                    onChange={handleFormChange}
                    helperText={error.customerGeneric4}
                    error={Boolean(error.customerGeneric4)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />        
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>generic 5</FormLabel>
                <TextField
                    name="customerGeneric5"
                    id= "customerGeneric5"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}   
                    onChange={handleFormChange}
                    helperText={error.customerGeneric5}
                    error={Boolean(error.customerGeneric5)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />         
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>registration date</FormLabel>
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelThree}`}>22/08/2022</FormLabel>
            </div>
          </div>
                     
        </React.Fragment>
    )
}

export default CustomerSupplimentaryInfo;

 



 