import {useState} from "react";

export const useDialog = ():[boolean, ()=>void, ()=>void] =>{
  const [open, setOpen] = useState(false)

  const closeOpen = () =>{
    setOpen(false)
  }

  const onOpen = () =>{
    setOpen(true)
  }

  return [open, onOpen, closeOpen]
}