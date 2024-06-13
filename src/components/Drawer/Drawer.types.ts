import {ReactNode} from "react";

export interface DrawerProps{
  open: boolean
  title: string
  onClose: ()=>void
  children: ReactNode
}