import React from "react" ;
import { makeStyles} from "@material-ui/core"; 
import { Link } from "react-router-dom"; 

const useStyles = makeStyles({
    list: {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        overflow: 'hidden' ,
        backgroundColor: 'cadetblue' ,
      
    }, 
    item:{
        float: "right",
    },
    link:{
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
    }
 
  }
  );
 

const Nav:React.FC =()=>{
    const classes = useStyles();
    return(
        <React.Fragment>
        <div>
            <ul className={classes.list}>
            <li  className={classes.item}><a  className={classes.link}  >Logout</a></li>          
            <li  className={classes.item}><a className={classes.link} >Contact</a></li>
            <li  className={classes.item}><Link to="/add" className={classes.link}>Add Employee</Link></li>
            <li  className={classes.item}><Link to="/" className={classes.link}>Employee</Link></li>
        </ul>

            </div>
      
        </React.Fragment>
    )
}

export default Nav;