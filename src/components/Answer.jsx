import React from "react"
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { PinDropSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
}));


const Answer = (props) => {
  // const classes = useStyles();
  return(
    <Button variant="contained" color="primary">
      {props.content}
    </Button> 
  )
}

export default Answer