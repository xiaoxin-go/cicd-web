import {Snackbar, Alert as MAlert} from "@mui/material";
import React from "react";
import {useAlertContext} from "context/AlertContext";


export const Alert: React.FC = () =>{
  const {open, type, text, duration, hideMessage} = useAlertContext()
  return (
    <Snackbar open={open} autoHideDuration={duration?duration*1000:6000} onClose={hideMessage}
              anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
      <MAlert onClose={hideMessage} severity={type} sx={{width: '100%'}}>
        {text}
      </MAlert>
    </Snackbar>
  )
}