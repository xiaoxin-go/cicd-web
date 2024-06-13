import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog as MDialog} from "@mui/material";
import {DialogProps} from "./Dialog.types";
import React from "react";

export const Dialog: React.FC<DialogProps> = ({open,title, text, onClose, onOk, okText, cancelText}) => {
  return (
    <MDialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelText||'CANCEL'}</Button>
        <Button onClick={onOk} autoFocus color="secondary">
          {okText || 'OK'}
        </Button>
      </DialogActions>
    </MDialog>
  )
}