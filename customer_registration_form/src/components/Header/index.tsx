import React from "react" ;
import { makeStyles, createStyles} from "@material-ui/core";   
 
const useStyles = makeStyles((theme)=>
  createStyles( {   
      main: {      
        width: "100%",
        color: "#fff",
        backgroundColor: "#2d2e2d",
        fontFamily: "'Times New Roman', Times, serif",
        fontSize: "14px",   
        padding: "20px 0",    
        marginBottom: "20px", 
      },  
      headerText:{
        paddingLeft: "20px",
      },
    })
    );  
const Header:React.FC=()=>{      
const classes = useStyles();
    return(
        <React.Fragment>     
          <div className={classes.main}>
             <span className={classes.headerText}>Customer registration</span> 
          </div>          
        </React.Fragment>
    )
}
export default Header;

 



 