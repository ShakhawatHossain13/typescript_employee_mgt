import React from "react";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { SearchOutlined } from '@material-ui/icons';
import FormLabel from '@material-ui/core/FormLabel';
import { Customer } from '../../../model';
import { CustomerContext } from "../../contexts/CustomerContext";
import TextFieldBasic from "../../Elements/TextFieldBasic";
import CCInput from "../../Elements/CCInput";

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
    width: "80%",
    WebkitBoxShadow: "0 0 0 0px white inset",
    "& .MuiFormHelperText-root": {
      marginTop: "-5px",
      fontSize: "11px",
      padding: "0 9px",
      width: "200px",
    },
  },
  formInputBoxOne: {
    gridColumn: "2",
    width: "100%",
    '@media screen and (max-width: 360px)': {
      width: "100%",
      gridColumn: "2/5",
    }
  }, 
  searchIcon: {
    border: "1px solid #000",
    borderRadius: "50%",
    fontSize: "20px",
    padding: "2px",
    gridColumn: "4",
    marginLeft: "20px",
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
type ErrorType = {
  [key: string]: string;
};
 
type CustomerBasicInfoProps = {
  customer: Customer;
  error: ErrorType;
  setError: React.Dispatch<React.SetStateAction<ErrorType>>;
  setCustomer: React.Dispatch<React.SetStateAction<Customer>>;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const CustomerBasicInfo: React.FC = () => {
  const { customer, error, setError, handleFormChange } = React.useContext(CustomerContext) as CustomerBasicInfoProps;
  const [suggestion, setSuggestion] = React.useState<string>();
  const phoneRegex = "^[0-9-]+$|^$";
  const postalRegex = "^[0-9-]+$|^$";

  const classes = useStyles();
  return (
    <React.Fragment>
      <FormLabel className={`${classes.formInputLabel}`}>Phone<span className={classes.formInputRequired}>*</span></FormLabel>     
      <TextField
        name="tel"
        id="tel"
        value={customer?.tel}
        className={`${classes.formInputBox}`}       
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { 
          if (!event.target.value.match(phoneRegex)) {
            setSuggestion("Only number and hyphen");     
            error.tel=""
          } else {
            setSuggestion(""); 
            return handleFormChange(event);                     
          }
        }}
        style={{ width: "180px" }}
        helperText={error?.tel || suggestion}
        error={Boolean(error.tel)}
        InputProps={{ disableUnderline: true, style: { fontSize: '12px' } }}
      />
      <TextFieldBasic
        name="name"
        id="name"
        text="Your name"
        value={customer?.name}
        error={error?.name}
        inputLabelWidth="75px"
        inputBoxWidth="80%"       
        gridLabel="1"
        gridBox=""
        RequiredFieldClass={classes.formInputRequired}
        RequiredFieldText={"*"}
        handleFormChange={handleFormChange}
      />
      <TextFieldBasic
        name="title"
        id="title"
        text="Title"
        value={customer?.title}
        error={error?.title}
        inputLabelWidth="75px"
        inputBoxWidth=""
        gridLabel="4"
        gridBox="5"
        RequiredFieldClass={classes.formInputRequired}
        RequiredFieldText={"*"}
        handleFormChange={handleFormChange}
      />
      <TextFieldBasic
        name="furigana"
        id="furigana"
        text="Furigana"
        value={customer?.furigana}
        error={error?.furigana}
        inputLabelWidth="75px"
        inputBoxWidth="80%"
        gridLabel="1"
        gridBox=""
        RequiredFieldClass={classes.formInputRequired}
        RequiredFieldText={"*"}
        handleFormChange={handleFormChange}
      />
      <TextFieldBasic
        name="sortcode"
        id="sortcode"
        text="Sort code"
        value={customer?.sortcode}
        error={error?.sortcode}
        inputLabelWidth="75px"
        inputBoxWidth="70%"
        gridLabel="6"
        gridBox="7"
        RequiredFieldClass={classes.formInputRequired}
        RequiredFieldText={"*"}
        handleFormChange={handleFormChange}
      />
      <FormLabel className={`${classes.formInputLabel} ${classes.formInputLabelOne}`}>T
        <span className={classes.formInputRequired}>*</span>
      </FormLabel>
      <TextField
        name="search"
        id="search"
        value={customer?.search}
        className={`${classes.formInputBox} ${classes.formInputBoxOne}`}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.value.match(postalRegex)) {
            return handleFormChange(event);
          } else {
            setError((prev) => ({
              ...prev,
              [error.search]: "Invalid",
            }));
          }
        }}
        style={{ width: "80%" }}
        helperText={error.search}
        error={Boolean(error.search)}
        InputProps={{ disableUnderline: true, style: { fontSize: '12px' } }}
      />
      <SearchOutlined className={classes.searchIcon} />
      <TextFieldBasic
        name="serviceLevel"
        id="serviceLevel"
        text="Service level"
        value={customer?.serviceLevel}
        error={error?.serviceLevel}
        inputLabelWidth="75px"
        inputBoxWidth="70%"
        gridLabel="6"
        gridBox="7"
        RequiredFieldClass={classes.formInputRequired}
        RequiredFieldText={"*"}
        handleFormChange={handleFormChange}
      />
      <TextFieldBasic
        name="prefectures"
        id="prefectures"
        text="Prefectures"
        value={customer?.prefectures}
        error={error?.prefectures}
        inputLabelWidth="75px"
        inputBoxWidth="80%"
        gridLabel="1"
        gridBox=""
        RequiredFieldClass={classes.formInputRequired}
        RequiredFieldText={"*"}
        handleFormChange={handleFormChange}
      />
      <TextFieldBasic
        name="groupCode"
        id="groupCode"
        text="Group code"
        value={customer?.groupCode}
        error={error?.groupCode}
        inputLabelWidth="75px"
        inputBoxWidth="70%"
        gridLabel="6"
        gridBox="7"
        RequiredFieldClass={classes.formInputRequired}
        RequiredFieldText={"*"}
        handleFormChange={handleFormChange}
      />
    </React.Fragment>
  )
}

export default CustomerBasicInfo;





