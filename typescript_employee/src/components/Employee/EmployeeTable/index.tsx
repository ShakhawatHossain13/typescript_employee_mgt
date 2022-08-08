import React from "react" ;
import { makeStyles} from "@material-ui/core"; 

interface EmployeeTable{
  
}
 
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
 

const EmployeeTable:React.FC =()=>{    
    const classes = useStyles();


    return(
        <React.Fragment>
            <div className={classes.table}>
                <h1 className={classes.table__title}>Employee List</h1>
                <div className="table__search"  >
                    <input className={classes.table__search} type="text" placeholder="Search..." />

                </div>

                    <table className={classes.table__main}>
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
                        <tr>
                            <td className={classes.table__main__tcell}>  <input type='checkbox' name="check"/></td>
                            <td className={classes.table__main__tcell}>Employee 1</td>
                            <td className={classes.table__main__tcell}>111</td>
                            <td className={classes.table__main__tcell}>user@gmail.com</td>
                            <td className={classes.table__main__tcell}>01732087573</td>     
                            <td className={classes.table__main__taction}>
                                <button className={classes.table__main__btn} type='submit'  >
                                        EDIT
                                </button>
                                <button className={classes.table__main__btn} type='submit'  >
                                        DELETE
                                </button>
                            </td>   
                                             
                        </tr>
                        <tr>
                            <td className={classes.table__main__tcell}>  <input type='checkbox' name="check" /></td>
                            <td className={classes.table__main__tcell}>Employee 2</td>
                            <td className={classes.table__main__tcell}>222</td>
                            <td className={classes.table__main__tcell}>user@gmail.com</td>
                            <td className={classes.table__main__tcell}>01732087573</td>      
                            <td className={classes.table__main__taction}>
                                <button  className={classes.table__main__btn} type='submit'  >
                                    EDIT
                                </button>
                                <button className={classes.table__main__btn}  type='submit'  >
                                     DELETE
                                </button>
                            </td>              
                        
                        </tr>
                        <tr>
                            <td className={classes.table__main__tcell}>  <input type='checkbox' name="check"/></td>
                            <td className={classes.table__main__tcell}>Employee 3</td>
                            <td className={classes.table__main__tcell}>333</td>
                            <td className={classes.table__main__tcell}>user@gmail.com</td>
                            <td className={classes.table__main__tcell}>01732087573</td>        
                            <td className={classes.table__main__taction}>
                                <button className={classes.table__main__btn} type='submit'  >
                                        EDIT
                                </button>
                                <button className={classes.table__main__btn}  type='submit'  >
                                        DELETE
                                </button>
                            </td>                 
                        </tr>
                    </table>

            </div>
           
           
        </React.Fragment>
    )
}



 
export default EmployeeTable;