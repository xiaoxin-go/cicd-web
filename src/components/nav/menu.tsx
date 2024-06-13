import * as React from 'react';
import {useNavigate} from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import MMenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import {useEffect, useState} from "react";
import {MenuItem} from "./Nav.types";


interface MenuProps{
  menus: MenuItem[]
}


export const Menu: React.FC<MenuProps> = ({menus}) => {
  const [activeKey, setActiveKey] = useState<string>("")
  const navigate = useNavigate()
  const changePath = (key: string, path: string) =>{
    navigate(path)
    setActiveKey(key)
  }
  useEffect(()=>{
    if(menus.length > 0){
      changePath(menus[0].key, menus[0].path)
    }
  }, [menus])
  return (
        <MenuList>
          {menus.map(item=>{
            return (
                <MMenuItem key={item.key} selected={activeKey===item.key} onClick={() => {
                  changePath(item.key, item.path)
                }}>
                  <ListItemText>{item.title}</ListItemText>
                </MMenuItem>
            )
          })}
        </MenuList>
  )
}
