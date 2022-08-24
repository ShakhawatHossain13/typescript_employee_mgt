import React  from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import { SearchOutlined } from '@material-ui/icons';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControl , RadioGroup, Radio, FormControlLabel, Typography } from "@material-ui/core"; 
import Checkbox  from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel'; 
import { Customer } from '../../../model';
import { CustomerContext } from "../../contexts/CustomerContext"; 
import Modal from '@material-ui/core/Modal';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
 
const useStyles = makeStyles({   
    formInput: {     
      margin: "0 auto",
      padding: "10px",    
      gridColumn: "1/9",  
      gridRowStart: "",
      display: "grid",     
      gridTemplateColumns:"repeat(2, 1fr)",  
      border: "1px solid #000",
      '@media screen and (max-width: 360px)' : {
        gridTemplateColumns:"repeat(1, 1fr)",             
    } 
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
        border: "1.5px solid red",
        borderRadius: "50%",
        padding: "0 7px",
      },
    }, 
    formInputBoxOne: {  
      gridColumn: "2",
      '@media screen and (max-width: 360px)' : {    
        gridColumn: "2/4", 
    } 
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
    paper: {
      position: 'absolute',
      width: 250,     
      height: 100,
      border: '2px solid #000',
      backgroundColor: '#fff',      
      padding: "30px 50px 45px 80px",
    },
    formInputModalButton:{
      border: '1px solid #000',
      marginLeft: "20px",
      borderRadius: '20px',
      padding: "0",
      marginBottom: "5px",
      height:"25px",
      backgroundColor: "#fff",
      width: "50px",
    },
   }
  );  
  type ErrorType = {
    [key: string]: string;
  };
  type CustomerSupplimentaryInfoProps ={ 
    customer: Customer;
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>; 
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  };
 
  function getModalStyle() {
    const top = 40;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
const CustomerSupplimentaryInfo:React.FC =()=>{      
  const { customer, error, setError, handleFormChange } = React.useContext(CustomerContext) as CustomerSupplimentaryInfoProps;   
  
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

const discountRegex = "^[0-9.]+$|^$";  

const classes = useStyles();
    return(
        <React.Fragment>   
          <div className={classes.formInput}>    
          <div className={classes.formInputGrid1}>
                <h5 className={classes.formInputTitle}>Customer Supplimentary Information</h5>
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Region code</FormLabel>
                <TextField
                    name="regionCode"
                    id= "regionCode"
                    className={`${classes.formInputBox} ${classes.formInputBoxTwo}`}    
                    onChange={handleFormChange}
                    helperText={error.regionCode}
                    error={Boolean(error.regionCode)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />     
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Gender</FormLabel>
 
                   <button type="button" 
                      onClick={handleOpen}
                      className={`${classes.formInputModalButton}`}                        
                      >
                     <MoreHorizIcon />
                  </button>
                  <Modal
                      open={open}
                      onClose={handleClose}                      
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      <div style={modalStyle} className={classes.paper}>                      

                      <FormControl component="fieldset" >   
                      <FormLabel  >Select an option:</FormLabel>         
                      <RadioGroup aria-label="receipt"                       
                          name="gender"                   
                          onChange={handleFormChange}
                          value={customer?.gender }
                        >
                          <FormControlLabel 
                            value="Male"                                            
                            control={<Radio  size="small" color="primary"  />} 
                            label={<Typography className={classes.formInputRadioButtonText}>Male</Typography>}
                          />
                          <FormControlLabel  
                            value="Female"                       
                            control={<Radio size="small" color="primary"  />} 
                            label={<Typography className={classes.formInputRadioButtonText}>Female</Typography>}
                          />   
                          <FormControlLabel  
                            value="Others"                       
                            control={<Radio size="small" color="primary"  />} 
                            label={<Typography className={classes.formInputRadioButtonText}>Others</Typography>}
                          />        
                        </RadioGroup>
                      </FormControl> 
                         
                        </div>
                  </Modal>
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Age</FormLabel>
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
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Custtomer rank</FormLabel>
                <TextField
                    name="customerRank"
                    id= "customerRank"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}  
                    onChange={handleFormChange}
                    helperText={error.customerRank}
                    error={Boolean(error.customerRank)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Credit registration</FormLabel>
                <TextField
                    name="creditRegistration"
                    id= "creditRegistration"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}  
                    onChange={handleFormChange}
                    helperText={error.creditRegistration}
                    error={Boolean(error.creditRegistration)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />   
                <h5 className={classes.formInputTitle}>Rejection Management</h5> 
                <FormGroup className={classes.formInputCheckBox}   
                    id= "rejectionManagement">                     
                    <FormControlLabel                  
                      control={
                        <Checkbox              
                          name="dm"
                          color="primary"      
                          onChange={handleFormChange}                      
                        />
                      }                     
                      label={<Typography className={classes.formInputCheckBoxText}>do not send DM</Typography>}
                    />
                     <FormControlLabel                       
                      control={
                        <Checkbox            
                          name="purchase"
                          color="primary"  
                          onChange={handleFormChange}                        
                        />
                      }                      
                      label={<Typography className={classes.formInputCheckBoxText}>do not issue a purchase order</Typography>}
                    />                 
            </FormGroup>
            <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>First store CD</FormLabel>
            <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelThree}`}>call center</FormLabel>
            </div>
            <div className={classes.formInputGrid2}>
            <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Requester</FormLabel>
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

                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Receipt</FormLabel>  
                            
                <FormControl component="fieldset" >            
                  <RadioGroup aria-label="receipt" className={`${classes.formInputRadioButtonGroup}`} name="receipt"  
                 
                  onChange={handleFormChange}>
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
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Discount rate</FormLabel>
                <TextField
                    name="discountRate"
                    id= "discountRate"
                    value={customer?.discountRate}
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}   
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      if (event.target.value.match(discountRegex)) {
                        return handleFormChange(event);
                      } else{
                        setError((prev) => ({
                          ...prev,
                          [error.discountRate]: "Invalid",
                        }));
                      }
                    }} 
                    helperText={error.age}
                    error={Boolean(error.age)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
               <span className={classes.formInputPercentage}>%</span>
              <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Discount rate memp</FormLabel>
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
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Generic 1</FormLabel>
                <TextField
                    name="customerGeneric1"
                    id= "customerGeneric1"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}     
                    onChange={handleFormChange}
                    helperText={error.customerGeneric1}
                    error={Boolean(error.customerGeneric1)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Generic 2</FormLabel>
                <TextField
                    name="customerGeneric2"
                    id= "customerGeneric2"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                    onChange={handleFormChange}
                    helperText={error.customerGeneric2}
                    error={Boolean(error.customerGeneric2)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                /> 
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Generic 3</FormLabel>
                <TextField
                    name="customerGeneric3"
                    id= "customerGeneric3"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}    
                    onChange={handleFormChange}
                    helperText={error.customerGeneric3}
                    error={Boolean(error.customerGeneric3)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />     
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Generic 4</FormLabel>
                <TextField
                    name="customerGeneric4"
                    id= "customerGeneric4"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`} 
                    onChange={handleFormChange}
                    helperText={error.customerGeneric4}
                    error={Boolean(error.customerGeneric4)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />        
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Generic 5</FormLabel>
                <TextField
                    name="customerGeneric5"
                    id= "customerGeneric5"
                    className={`${classes.formInputBox} ${classes.formInputBoxOne}`}   
                    onChange={handleFormChange}
                    helperText={error.customerGeneric5}
                    error={Boolean(error.customerGeneric5)}                          
                    InputProps={{ disableUnderline: true, style: { fontSize: '12px' , padding: '0' }}}            
                />         
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>Registration date</FormLabel>
                <FormLabel  className={`${classes.formInputLabel} ${classes.formInputLabelThree}`}>22/08/2022</FormLabel>
            </div>
          </div>
                     
        </React.Fragment>
    )
}

export default CustomerSupplimentaryInfo;

 



 