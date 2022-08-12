import React, { FormEvent } from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useNavigate , Link} from "react-router-dom";   

const useStyles = makeStyles({
    form: {
        width: "50%",
        margin: "0 auto",
        boxSizing: "border-box",    
        '@media screen and (max-width: 480px)' : {
            width: '90%'
          }     
    },
    form__title:{
        textAlign: 'center',
        marginTop:"50px",
        color: 'cadetblue',
    },

    form__wrapper__main: { 
      border: '1px solid cadetblue',
      padding: '30px',
      display: 'grid',
      gap: '0 15px',   
      paddingBottom: '30px',
      gridTemplateColumns: '1fr 1fr',
      '@media screen and (max-width: 480px)' : {
        gridTemplateColumns: '1fr',
      }  
    },
    form__wrapper__main__half:{
        height:'60px',
    },
    form__wrapper__main__half__input:{
      width: '95%',
      padding: '16px 5px', 
      fontSize: '14px',
    },
    form__wrapper__main__half__input__select:{
        width: '97%',
        padding: '0px', 
        fontSize: '14px',
    },
    form__wrapper__main__half__msg:{
        fontSize: '12px',
        margin: '5px 0',
        color: 'blue'
    },
    form__wrapper__main__btn:{
        width: '70px',
        height:'35px',
        backgroundColor: 'cadetblue',
        margin: '20px 0',
        border: '0',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '5px',
    },
  }
  ); 

  type formDataType = {    
    name: string,
    email: string,
    tel: string,
    eid: string,     
    position: string,
    skills: string,
  };

  const formData: formDataType = {
    name: "",
    email: "",
    tel: "",
    eid: "",     
    position: "",
    skills: "",
  };

  type ErrorType = {
    [key: string]: string;
  };
  
  const initialError: ErrorType = {
    name: "",
    email: "",
    tel: "",
    eid: "",     
    position: "",
    skills: "",
  };
  
type AddEmployeeProps ={};
const AddEmployee:React.FC<AddEmployeeProps>=(props)=>{    

    const [employee, setEmployee] = React.useState<formDataType>(formData);
    const [error, setError] = React.useState(initialError); 
    const phoneRegex = "^[0-9-]+$|^$";
    const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const skill = [
      { value: 'React'},
      { value: 'Node JS'},
      { value: 'Mongo DB'},
      { value: 'AWS'}, ];

    const navigate = useNavigate();   
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;    
        setEmployee((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
    
        setError((prev) => ({
          ...prev,
          [name]: "",
        }));
      };

      /** 
        Method for validating fields
      */
      const isValid = () => {
        let hasError = false;
        const copyErrors: ErrorType = { ...error };    
        const validationFields = ["name", "email", "tel", "eid", "position" ];    
        for (let key in copyErrors) {
          if (
            validationFields.includes(key) &&
            employee[key as keyof typeof employee] === ""
          ) {
            copyErrors[key] = "required";
            hasError = true;
          } else {
            copyErrors[key] = ``;
          }
        }
        setError(copyErrors);    
        return hasError;
      };

      const  handleAdd=(e:FormEvent<HTMLFormElement>)=>{        
        e.preventDefault();      

        if (isValid()) {
            return;
          }              
        try {
            console.log("Employee: ", employee);
            onAdd();
          } catch (error) {
            console.log(error);
          }       
      } 
  
      /** 
       Method to Add employee info through create API
      */
      const onAdd =  async () => {
 
       await fetch("http://localhost:3000/admin/add-employee", {            
          method: "POST",
          headers: {
            "Content-Type": "application/json"
       }, 
          body: JSON.stringify({
            name:employee.name,
            email:employee.email,
            tel:employee.tel,
            eid:employee.eid,
            position:employee.position,
            skills:employee.skills
          }),
           
        }).then((res) => res.json())
        .then((data) => {
             if(data.success) navigate('/'); 
            
        }).catch((err) => {
            console.log(err);
            });
      };
    

const classes = useStyles();
    return(
        <React.Fragment>         
            <div className={classes.form}>
                <h1 className={classes.form__title}>Add Record</h1>    
                <Link  to="/">  
                    <button className={classes.form__wrapper__main__btn}  >
                                Back
                    </button>
                </Link> 
                <form className="form__wrapper" onSubmit={(e)=>handleAdd(e)}>      
                    <div className={classes.form__wrapper__main}>            
                        <div className={classes.form__wrapper__main__half}>
                            <TextField className={classes.form__wrapper__main__half__input} type="text" id="name" name="name" placeholder="Full Name"              
                                value={employee.name}
                                helperText={error.name}                                                        
                                onChange={handleChange}                             
                                error={Boolean(error.name)}
                            />
                        </div>
                        <div className={classes.form__wrapper__main__half}>            
                            <TextField className={classes.form__wrapper__main__half__input} type="email" id="email" name="email" placeholder="Email"                              
                                value={employee.email}
                                helperText={error.email}                                                        
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    if (event.target.value.match(emailRegex)) {
                                      handleChange(event);
                                    }
                                  }}                       
                                error={Boolean(error.email)}
                              />
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <TextField className={classes.form__wrapper__main__half__input} type="tel" id="tel" name="tel" placeholder="Phone Number"                             
                                value={employee.tel}
                                helperText={error.tel}                                                        
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    if (event.target.value.match(phoneRegex)) {
                                      handleChange(event);
                                    }
                                  }}                 
                                error={Boolean(error.tel)}
                            />
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <TextField className={classes.form__wrapper__main__half__input} type="text" id="eid" name="eid" placeholder="Employee ID"                               
                                value={employee.eid}
                                helperText={error.eid}                                                        
                                onChange={handleChange}                             
                                error={Boolean(error.eid)}
                            />
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <TextField className={classes.form__wrapper__main__half__input} type="text" id="position" name="position" placeholder="Position"                            
                                value={employee.position}
                                helperText={error.position}                                                        
                                onChange={handleChange}                             
                                error={Boolean(error.position)}
                        />
                        </div>                      
                        <div >                             
                        <Autocomplete                                               
                                options={skill}
                                className={classes.form__wrapper__main__half__input__select}
                                getOptionLabel={(option:any) => option.value}    
                                onChange={(e, value: any) => {
                                    setEmployee((prev:any) => {
                                        return {
                                          ...prev,
                                          skill: value?.value,
                                        };
                                      });
                                    }}                       
                                renderInput={(params:any) => 
                                <TextField                              
                                    value={employee.skills}
                                    helperText={error.skills}   
                                    onChange={handleChange}                                                       
     
                                    error={Boolean(error.skills)}
                                    name="skills"                                                               
                                    {...params} label="Select skill"  />}
                                />
                        </div>   
                            </div>         
                        <button className={classes.form__wrapper__main__btn} type='submit'  >
                            Submit
                        </button>
                </form>               
            </div>           
        </React.Fragment>
    )
}
 

export default AddEmployee;

 
