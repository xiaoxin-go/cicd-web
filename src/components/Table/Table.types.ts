import {ReactNode} from "react";

export interface TableColumn{
  title: string
  field: string
  width?: number
  tag?: 'chip'
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined
  valueGetter?: (row: any) => string
}

export interface TableProps{
  columns: TableColumn[]
  rows: any[]
  action?: (row: any)=>ReactNode
}