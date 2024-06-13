import {DrawerProps} from "components/Drawer/Drawer.types";
import {IconButton, Drawer as MDrawer, Typography} from "@mui/material";
import {Close as CloseIcon} from "@mui/icons-material";
import React from "react";

export const Drawer: React.FC<DrawerProps> = ({open,title, onClose, children}) =>{
  return (
    <MDrawer
      anchor={'right'}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {width: "50%", p: 3}
      }}
    >
      <div style={{display: 'flex', verticalAlign: 'top', alignItems: 'center'}}>
        <IconButton onClick={onClose} sx={{mb: 1.5, height: 60, width: 60}}>
          <CloseIcon/>
        </IconButton>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      </div>
      {children}
    </MDrawer>
  )
}