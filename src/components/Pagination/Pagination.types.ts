import {ChangeEvent} from "react";
import {SelectChangeEvent} from "@mui/material";

export interface PaginationProps{
  page: number
  pageSize: string
  count: number
  changePage: (event: ChangeEvent<unknown>, page: number)=>void
  changePageSize: (event: SelectChangeEvent)=>void
}