import React, { FormEvent, useState } from "react" ;
import { makeStyles} from "@material-ui/core"; 
import { useParams,useLocation, useNavigate } from "react-router-dom"; 

type EditEmployeeProps ={
    id: number,
     
}

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
      paddingBottom: '10px',
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
      padding: '7px 5px', 
      fontSize: '14px',
    },
    form__wrapper__main__half__input__select:{
        width: '100%',
        padding: '7px 5px', 
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
 

const EditEmployee:React.FC  =(props)=>{
    const { id } = useParams(); 
    const navigate = useNavigate();

    let data:any = "";
    const search = useLocation().search;
    data = new URLSearchParams(search).get('choosenEmployee');
    const emp = JSON.parse(data);

     

    const [employee, setEmployee] =  useState({  
        name: emp.name,
        email: emp.email,
        tel: emp.tel,
        eid: emp.eid,     
        position: emp.position,
        skills: emp.namskillse,
    })
  
    
      const  handleEdit=(e:FormEvent<HTMLFormElement>)=>{        
        e.preventDefault();     
        const {name, email, tel, eid, position, skills} = e.target as typeof e.target & {
            name : {value: string}
            email: {value: string}
            tel: {value: string}
            eid: {value: string}
            position: {value: string}
            skills: {value: string}
        }  
         
        onEdit(name.value, email.value, tel.value, eid.value, position.value, skills.value);
      } 
 
      const onEdit =  async (name:string, email:string, tel:string, eid:string, position:string, skills:string ) => {
 
 
        await  fetch(`http://localhost:3000/admin/edit-employee/${id}`, {             
           method: "PUT",
           headers: {
             "Content-Type": "application/json"
        }, 
           body: JSON.stringify({
             name:name,
             email:email,
             tel:tel,
             eid:eid,
             position:position,
             skills:skills
           }),
         }).then((res) => res.json())
         .then((data) => {              
             if(data.success)  navigate(-1);      
         }).catch((err) => {
             console.log(err);
        });
       };

const classes = useStyles();
    return(
        <React.Fragment>         
            <div className={classes.form}>
                <h1 className={classes.form__title}>Edit Record</h1>       
                <button className={classes.form__wrapper__main__btn}    >
                    Back
                </button>
                <form className="form__wrapper" onSubmit={(e)=>handleEdit(e)}>      
                    <div className={classes.form__wrapper__main}>            
                        <div className={classes.form__wrapper__main__half}>
                            <input className={classes.form__wrapper__main__half__input} type="text" id="name" name="name" placeholder="Full Name" 
                              onChange={(e:any)=> setEmployee(e.target.value)}
                              value={employee.name}                           
                            />
                            <p id="errorname" className={classes.form__wrapper__main__half__msg}></p>
                        </div>
                        <div className={classes.form__wrapper__main__half}>            
                            <input className={classes.form__wrapper__main__half__input} type="email" id="email" name="email" placeholder="Email" 
                           value={employee.email}
                           onChange={(e:any)=> setEmployee(e.target.value)}
                              />
                            <p  id="erroremail" className={classes.form__wrapper__main__half__msg}></p>
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <input className={classes.form__wrapper__main__half__input} type="tel" id="tel" name="tel" placeholder="Phone Number"
                           value={employee.tel}
                           onChange={(e:any)=> setEmployee(e.target.value)}
                            />
                            <p  id="errortel" className={classes.form__wrapper__main__half__msg}></p>
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <input className={classes.form__wrapper__main__half__input}type="text" id="eid" name="eid" placeholder="Employee ID"
                               value={employee.eid}
                               onChange={(e:any)=> setEmployee(e.target.value)}
                            />
                            <p  id="erroreid" className={classes.form__wrapper__main__half__msg}></p>
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <input className={classes.form__wrapper__main__half__input} type="text" id="position" name="position" placeholder="Position" 
                            value={employee.position}
                            onChange={(e:any)=> setEmployee(e.target.value)}
                            />
                            <p  id="errorposition"  className={classes.form__wrapper__main__half__msg}></p>
                        </div>                       
                        <div className={classes.form__wrapper__main__half}>
                            {/* <input className={classes.form__wrapper__main__half__input} type="text" id="skills" name="skills" placeholder="Skills" 
                              value={employee.skills}
                             onChange={handleInput}
                            /> */}
                            <select  className={classes.form__wrapper__main__half__input__select} id="skills" name="skills" 
                                     value={employee.skills}
                                     onChange={(e:any)=> setEmployee(e.target.value)}
                                    >

                                        <option value={employee.skills} selected> {employee.skills} </option>
                                        <option value="React">React</option>
                                        <option value="Node JS">Node JS</option>
                                        <option value="Mongo DB">MongoDB</option>
                                        <option value="AWS">AWS</option>
                            </select>
                                    <p  id="errorskills"  className={classes.form__wrapper__main__half__msg}></p>
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

export default EditEmployee;


 
