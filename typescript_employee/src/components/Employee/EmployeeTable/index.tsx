import React, {useState, useEffect } from "react" ;
import { Link } from "react-router-dom"; 
import { makeStyles} from "@material-ui/core";   
 
const useStyles = makeStyles({
    table: {
        width: "80%",
        margin: "50px auto",
        boxSizing: "border-box",               
    },
    table__title:{
        textAlign:'center',
        color: "cadetblue",
    },
    table__main: {
        width: "100%",
        textAlign:"left",
        border:"1px solid #f0f0f0",
    },
    table__main__thead:{
        textAlign: 'center',
        padding: '8px',
        backgroundColor:"#f0f0f0",
    },
    table__main__tcell:{
        textAlign: 'center',
        padding: '8px',
        backgroundColor:"#f0f0f0",
    },
    table__main__taction:{
        textAlign: 'center',
        backgroundColor:"#f0f0f0",
      
    },
    table__main__theadaction:{
        textAlign: 'center',
        padding: '8px',
        backgroundColor:"#f0f0f0",
        
    },
    table__main__btn:{
        width: '70px',
        height:'35px',
        backgroundColor: 'cadetblue',
        margin: '10px',
        border: '0',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '5px',

     },
     table__main__thead__checkbox:{
        textAlign: "center",

     },
     table__search:{
        "&:focus": {
            border: '1px solid cadetblue', 
          },
        width: '300px',
        padding: '8px 10px', 
        fontSize: '14px',
        textAlign: 'left',
        float:'left',     
        margin: '20px',
        marginLeft:'2px',
        border: '1px solid cadetblue',  
        borderRadius: '5px',
        
     },
  }
  );

  type formDataType = {    
    id:number;
    name: string,
    email: string,
    tel: string,
    eid: string,     
    position: string,
    skills: string,
  };
  
type EmployeeTableProps ={}

const EmployeeTable:React.FC<EmployeeTableProps> =()=>{    
        const classes = useStyles();
        const [employees, setEmployees] = useState<formDataType[]>([]); 
        const [query, setQuery] = useState<string>(''); 
        const [isChecked, setIsChecked] = useState([]);

        const getData = async ()=>{
         const response = await  fetch('http://localhost:3000',
            {   method: 'GET',    
                headers: {
                     "Content-Type": "application/json"
                },   
         }              
            )
         const result = await response.json(); 
            setEmployees(result.results)   
        } 
         const handleCheckbox =(e:React.ChangeEvent<HTMLInputElement>)=>{
            const {value, checked} = e.target; 
         }
         const handleDelete = (e:  React.FormEvent, id:number) => {
            onDelete(id);
        }
 
      /** 
        Method to delete employee info through delete API
      */      
        const onDelete =  (id:number) => {
            fetch(`http://localhost:3000/admin/delete-employee/${id}`, {
                headers: {
                    "Content-Type": "application/json"
               },  
              method: "DELETE",
            })               
              .catch((err) => {
                console.log(err);
              });
          };

          useEffect(() => {       
            getData();
          },[employees]);
 
        let filteredEmployee;
          
        filteredEmployee = employees.filter((asd) =>
        asd.name.toString().toLowerCase().includes(query) );
 
          const eventOnChange = (q:string) =>{
            setQuery(q);    
          } 
    return(
        <React.Fragment>
            <div className={classes.table}>
                <h1 className={classes.table__title}>Employee List</h1>
                <div className="table__search"  >
                    <input className={classes.table__search} type="text" placeholder="Search..." onChange={(e)=> eventOnChange(e.target.value)} />
                </div>
                    <table className={classes.table__main}>
                        <tbody>
                        <tr>
                            <th className={classes.table__main__thead}>
                                <input id="select__all" className={classes.table__main__thead__checkbox} type='checkbox'/>
                            </th>
                            <th className={classes.table__main__thead}>Name</th>
                            <th className={classes.table__main__thead}>ID</th>
                            <th className={classes.table__main__thead}>Email</th>
                            <th className={classes.table__main__thead}>Phone</th>     
                            <th className={classes.table__main__theadaction}>Action</th>                      
                        </tr>
  
                        {filteredEmployee?.map((emp:formDataType)=>(                        
                            <tr key={emp.id}> 
                                <td className={classes.table__main__tcell}>  <input type='checkbox' value={emp.id}  name="check"  onChange={(e)=>handleCheckbox(e)}/></td>
                                <td className={classes.table__main__tcell}>{emp.name}</td>
                                <td className={classes.table__main__tcell}>{emp.eid}</td>
                                <td className={classes.table__main__tcell}>{emp.email}</td>
                                <td className={classes.table__main__tcell}>{emp.tel}</td>     
                                <td className={classes.table__main__taction}>
                                <Link  
                                    to={{
                                      pathname: `/edit-employee/${emp?.id}`,
                                      search: `choosenEmployee=${JSON.stringify( {...emp})}`  
                                    }
                                    }                                  
                                    >
                                    <button className={classes.table__main__btn} type='submit'  >
                                            EDIT
                                    </button>
                                    </Link>
                                    <button className={classes.table__main__btn} type='submit' onClick={(e)=>handleDelete(e, emp.id)}  >
                                            DELETE
                                    </button>
                                </td>   
                            </tr>
                         
                        ))}   
                        </tbody>                     
                    </table> 
                    {!filteredEmployee?.length && <h1>No Data Found!</h1>}
            </div>
            
        </React.Fragment>
    )
}
 
export default EmployeeTable;
