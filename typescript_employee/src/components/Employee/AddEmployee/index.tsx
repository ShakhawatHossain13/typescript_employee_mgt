import React, { FormEvent, useState } from "react" ;
import { makeStyles} from "@material-ui/core"; 
import { employee } from "../../../model"; 
import { createModuleBlock } from "typescript";


type AddEmployeeProps ={
    
    
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
 

const AddEmployee:React.FC =()=>{
    const inital = {  
        name: "",
        email: "",
        tel: "",
        eid: "",     
        position: "",
        skills: "",
    }

    const [employee, setEmployee] = useState(inital);
            
    
      const  handleAdd=(e:FormEvent<HTMLFormElement>)=>{        
        e.preventDefault();     
        const {name, email, tel, eid, position, skills} = e.target as typeof e.target & {
            name : {value: string}
            email: {value: string}
            tel: {value: string}
            eid: {value: string}
            position: {value: string}
            skills: {value: string}
        }  
     
        setEmployee((prev)=>( 
            {...prev,
            name:name.value, 
            email:email.value, 
            tel:tel.value, 
            eid:eid.value, 
            position:position.value, 
            skills:skills.value})
           ); 
        
          
        onAdd(name.value, email.value, tel.value, eid.value, position.value, skills.value);
      } 

      console.log(employee.name, employee.email,employee.tel, employee.eid);

      const onAdd =  async (name:string, email:string, tel:string, eid:string, position:string, skills:string ) => {
 
       await  fetch("http://localhost:3000/admin/add-employee", {
            
          method: "POST",
          body: JSON.stringify({
            name:name,
            email:email,
            tel:tel,
            eid:eid,
            position:position,
            skills:skills
          }),
           
        })
           
      };


     
     

    //   const handleInput = (e:React.FormEvent) =>{
    //     const {name, email, tel, eid, position, skills} = e.target as typeof e.target & {
    //         name : {value: string}
    //         email: {value: string}
    //         tel: {value: string}
    //         eid: {value: string}
    //         position: {value: string}
    //         skills: {value: string}
    //     }  
     
    //     setEmployee((prev)=>( 
    //         {...prev,
    //         name:name.value, 
    //         email:email.value, 
    //         tel:tel.value, 
    //         eid:eid.value, 
    //         position:position.value, 
    //         skills:skills.value})
    //        );
    //   }

const classes = useStyles();
    return(
        <React.Fragment>         
            <div className={classes.form}>
                <h1 className={classes.form__title}>Add Record</h1>       
                <button className={classes.form__wrapper__main__btn}    >
                            Back
                </button>
                <form className="form__wrapper" onSubmit={(e)=>handleAdd(e)}>      
                    <div className={classes.form__wrapper__main}>            
                        <div className={classes.form__wrapper__main__half}>
                            <input className={classes.form__wrapper__main__half__input} type="text" id="name" name="name" placeholder="Full Name" 
                        //    onChange={handleInput}
                            // value={employee.name}
                           
                            />
                            <p id="errorname" className={classes.form__wrapper__main__half__msg}></p>
                        </div>
                        <div className={classes.form__wrapper__main__half}>            
                            <input className={classes.form__wrapper__main__half__input} type="email" id="email" name="email" placeholder="Email" 
                            // value={employee.email}
                            //   onChange={handleInput}
                              />
                            <p  id="erroremail" className={classes.form__wrapper__main__half__msg}></p>
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <input className={classes.form__wrapper__main__half__input} type="tel" id="tel" name="tel" placeholder="Phone Number"
                            // value={employee.tel}
                            // onChange={handleInput}
                            />
                            <p  id="errortel" className={classes.form__wrapper__main__half__msg}></p>
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <input className={classes.form__wrapper__main__half__input}type="text" id="eid" name="eid" placeholder="Employee ID"
                            //  value={employee.eid}
                            // onChange={handleInput}
                            />
                            <p  id="erroreid" className={classes.form__wrapper__main__half__msg}></p>
                        </div>
                        <div className={classes.form__wrapper__main__half}>
                            <input className={classes.form__wrapper__main__half__input} type="text" id="position" name="position" placeholder="Position" 
                            // value={employee.position}
                            //  onChange={handleInput}
                            />
                            <p  id="errorposition"  className={classes.form__wrapper__main__half__msg}></p>
                        </div>                       
                        <div className={classes.form__wrapper__main__half}>
                            {/* <input className={classes.form__wrapper__main__half__input} type="text" id="skills" name="skills" placeholder="Skills" 
                              value={employee.skills}
                             onChange={handleInput}
                            /> */}
                            <select  className={classes.form__wrapper__main__half__input__select} id="skills" name="skills" 
                                    //  value={employee.skills}
                                    // onChange={handleInput}
                                    >

                                        <option value="React">--- Selcet Skill ---</option>
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

export default AddEmployee;




// const emailPattern:any = /^\S+@\S+$/i;
// const telPattern:any = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
// const name:string = (document.getElementById('name') as HTMLInputElement).value;
// const email:string = (document.getElementById('email') as HTMLInputElement).value;
// const tel:string = (document.getElementById('tel') as HTMLInputElement).value;
// const eid:string = (document.getElementById('eid') as HTMLInputElement).value;

// if(name === ""){
//     (document.getElementById('errorname') as HTMLParagraphElement).innerHTML = "Please Input Full Name";
//     return false;
// }else{
//     (document.getElementById('errorname') as HTMLParagraphElement).innerHTML = "";
// }

// if(email === ""){
//     (document.getElementById('erroremail') as HTMLParagraphElement).innerHTML = "Please provide email address";
//     return false;
// }else if(!email.match(emailPattern)){
//     (document.getElementById('erroremail') as HTMLParagraphElement).innerHTML = "Please valid email address";
//     return false;
// }else{
//     (document.getElementById('erroremail') as HTMLParagraphElement).innerHTML = "";
// }

// if(tel === ""){
//     (document.getElementById('errortel') as HTMLParagraphElement).innerHTML = "Please provide phone number";
//     return false;
// }else if(!tel.match(telPattern)){
//     (document.getElementById('errortel') as HTMLParagraphElement).innerHTML = "Provide a valid phone number";
//     return false;
// }
// else{
//     (document.getElementById('errortel') as HTMLParagraphElement).innerHTML = "";
// }

// if(eid === ""){
//     (document.getElementById('erroreid') as HTMLParagraphElement).innerHTML = "Please provide EID";
//     return false;
// }else{
//     (document.getElementById('erroreid') as HTMLParagraphElement).innerHTML = "";
// }
