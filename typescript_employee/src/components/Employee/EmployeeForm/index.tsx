import React, { FormEvent} from "react" ;
import { makeStyles} from "@material-ui/core";  
import { TextField } from "@material-ui/core"; 
import Autocomplete from '@material-ui/lab/Autocomplete'; 
import { useParams,useLocation, useNavigate, Link } from "react-router-dom"; 
 
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

type EmployeeFormProps ={};

const EmployeeForm:React.FC<EmployeeFormProps> =(props)=>{        
    const search = useLocation().search;
    const  data = new URLSearchParams(search).get('choosenEmployee');
    const emp = JSON.parse(data ?? "");  
    
    const formData: formDataType = {
        name: "",
        email: "",
        tel: "",
        eid: "",     
        position: "",
        skills: "",
    };
  
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [employee, setEmployee] = React.useState<formDataType>(formData);
    const [edit, setEdit] = React.useState<boolean>(false);
    const [error, setError] = React.useState<ErrorType>(initialError);     

    const phoneRegex = "^[0-9-]+$|^$";
    const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const skill = [
      { value: 'React'},
      { value: 'Node JS'},
      { value: 'Mongo DB'},
      { value: 'AWS'}, ];
        
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

      const  handleSubmit=(e:FormEvent<HTMLFormElement>)=>{        
        e.preventDefault();      
        if (isValid()) {
            return;
          }
        try {         
          if(edit){
             onEdit();
          } else
          {
            onAdd(employee);
          }           
          } catch (error) {
            console.log(error);
          }
      } 

      /** 
        Method to Add employee info through create API
      */
       const onAdd =  async (employee: formDataType) => {
 
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

      /** 
        Method to Edit employee info through Update API
      */
      const onEdit =  async () => {
 
        await  fetch(`http://localhost:3000/admin/edit-employee/${id}`, {             
            method: "PUT",
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
              if(data.success)  navigate(-1);      
          }).catch((err) => {
              console.log(err);
         });
      };

    const fetchDetails = () => {       
     setEmployee((prev) => {
      return {
        ...prev,
        name: emp.name,
        email: emp.email,
        tel: emp.tel,
        eid: emp.eid,     
        position: emp.position,
        skills: emp.skills,
      };
    });
    };
    
  React.useEffect(() => {
    if (id) {
      fetchDetails();
      setEdit(true);
    }
  }, [id]);

const classes = useStyles();
    return(
        <React.Fragment>         
            <div className={classes.form}>
                <h1 className={classes.form__title}>Edit Record</h1>       
                <Link to="/">
                  <button className={classes.form__wrapper__main__btn}  >
                          Back
                  </button>
                </Link>
                <form className="form__wrapper" onSubmit={(e)=>handleSubmit(e)}>      
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
                                   return handleChange(event);
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
                                     return handleChange(event);
                                    }
                                  }}                 
                                error={Boolean(error.tel)}
                            />
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <TextField className={classes.form__wrapper__main__half__input}type="text" id="eid" name="eid" placeholder="Employee ID"                               
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
                        <div>         
                            <Autocomplete                                               
                                    options={skill}
                                    className={classes.form__wrapper__main__half__input__select}
                                    defaultValue={
                                      skill.find((item) => item.value === emp?.skills) || null
                                    }
                                    onChange={(e, value) => {
                                      setEmployee((prev:any) => {
                                          return {
                                            ...prev,
                                            skill: value?.value,
                                          };
                                        });
                                      }}
                                      
                                    getOptionLabel={(option) => option?.value}                               
                                    renderInput={(params) => 
                                    <TextField                              
                                        value={employee.skills}
                                        helperText={error.skills}                                                                       
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

export default EmployeeForm;
