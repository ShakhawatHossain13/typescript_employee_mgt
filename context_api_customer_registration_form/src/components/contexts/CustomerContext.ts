import { createContext } from "react"; 
import { Customer } from '../../model';

type ErrorType = {
    [key: string]: string;
  };
  
type CustomerBasicInfoProps ={ 
    customer: Customer;
    error: ErrorType;
    setError: React.Dispatch<React.SetStateAction<ErrorType>>;
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };

 
export const CustomerContext = createContext<CustomerBasicInfoProps | null>(null);