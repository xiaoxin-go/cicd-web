import {ReactNode} from "react";

export type ChipColor = "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"

export interface TableColumn{
  title: string
  field: string
  width?: number
  tag?: 'chip'
  color?: ChipColor
  valueGetter?: (row: any) => string
  colorGetter?:(row: any) => ChipColor
}

export interface TableProps{
  columns: TableColumn[]
  rows: any[]
  action?: (row: any)=>ReactNode
}