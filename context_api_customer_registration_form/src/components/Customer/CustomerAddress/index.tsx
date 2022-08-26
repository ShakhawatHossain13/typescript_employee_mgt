import React from "react";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import FormLabel from '@material-ui/core/FormLabel';
import { Customer } from '../../../model';
import { CustomerContext } from "../../contexts/CustomerContext";
import CCInput from "../../Elements/CCInput";

const useStyles = makeStyles({
  formInput: {
    margin: "0 auto",
    padding: "10px",
    gridColumn: "1/9",
    width: "97%",
  },
  formInputWrapper: {
    width: "100%",
  },
  formInputLabel: {
    fontFamily: "'Times New Roman', Times, serif",
    textAlign: "right",
    fontSize: "12px",
    color: "#000",
    display: "inline-block",
  },
  formInputBox: {
    fontFamily: "'Times New Roman', Times, serif",
    border: '1px solid #000',
    marginLeft: "12px",
    borderRadius: '20px',
    padding: "0 5px",
    marginBottom: "12px",
    height: "25px",
    fontSize: "12px",
    backgroundColor: "#fff",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      fontSize: "11px",
      padding: "0 7px",
    },
  },
}
);

type ErrorType = {
  [key: string]: string;
};
type CustomerAddressProps = {
  customer: Customer;
  error: ErrorType;
  setError: React.Dispatch<React.SetStateAction<ErrorType>>;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const CustomerAddress: React.FC = () => {
  const { customer, error, setError, handleFormChange } = React.useContext(CustomerContext) as CustomerAddressProps;
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.formInput}>
        <CCInput
          name="address1"
          id="address1"
          text="Address 1"
          inputBoxWidth="40%"
          inputLabelWidth="70px"
          value={customer?.address1}
          error={error?.address1}
          RequiredFieldText={"*"}
          handleFormChange={handleFormChange}
        />
        <CCInput
          name="address2"
          id="address2"
          text="Address 2"
          inputBoxWidth="40%"
          inputLabelWidth="70px"
          value={customer?.address2}
          error={error?.address2}
          RequiredFieldText={""}
          handleFormChange={handleFormChange}
        />
        <CCInput
          name="address3"
          id="address3"
          text="Address 3"
          inputBoxWidth="40%"
          inputLabelWidth="70px"
          value={customer?.address3}
          error={error?.address3}
          RequiredFieldText={""}
          handleFormChange={handleFormChange}
        />
        <CCInput
          name="address4"
          id="address4"
          text="Address 4"
          inputBoxWidth="40%"
          inputLabelWidth="70px"
          value={customer?.address4}
          error={error?.address4}
          RequiredFieldText={""}
          handleFormChange={handleFormChange}
        />

        <CCInput
          name="company"
          id="company"
          text="Company"
          inputBoxWidth="50%"
          inputLabelWidth="70px"
          value={customer?.company}
          error={error?.company}
          RequiredFieldText={"*"}
          handleFormChange={handleFormChange}
        />

        <CCInput
          name="department"
          id="department"
          text="Department"
          inputBoxWidth="50%"
          inputLabelWidth="70px"
          value={customer?.department}
          error={error?.department}
          RequiredFieldText={"*"}
          handleFormChange={handleFormChange}
        />
      </div>
    </React.Fragment>
  )
}

export default CustomerAddress;





