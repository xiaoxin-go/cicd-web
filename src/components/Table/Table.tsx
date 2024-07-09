import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Chip from '@mui/material/Chip'
import MTable from "@mui/material/Table";
import {TableColumn, TableProps} from "components/Table/Table.types";
import { styled } from '@mui/material/styles';
import React, {ReactNode} from "react";
import {tableCellClasses} from "@mui/material/TableCell";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#fafafa',
    color: theme.palette.common.black,
    fontWeight: 600
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  // [`&.${tableRowClasses.root}:hover`]: {
  //   backgroundColor: '#fafafa'
  // }
}));

const getValue = (item: TableColumn, row: any) => {
  if (item.valueGetter) {
    return item.valueGetter(row)
  }
  return row[item.field]
}

const cell = (item: TableColumn, row: any) => {
  switch (item.tag) {
    case "chip":
      return <Chip size="small" label={getValue(item, row)} color={item.colorGetter?item.colorGetter(item):item.color}/>
    default:
      return getValue(item, row)
  }
}

const headers = (columns: TableColumn[]) => {
  return (<TableRow>
    {
      columns.map(item => <StyledTableCell>{item.title}</StyledTableCell>)
    }
  </TableRow>)
}

const body = (columns: TableColumn[], rows: any, action?: (row: any)=>ReactNode) => {
  return (
    rows.map((row: any) => (
      <StyledTableRow key={row.id}>
        {
          columns.map(item => {
            if(item.field === 'action' && action){
              return <StyledTableCell>{action(row)}</StyledTableCell>
            }
              return <StyledTableCell>{cell(item, row)}</StyledTableCell>
            }
          )
        }
      </StyledTableRow>
    ))
  )
}

export const Table: React.FC<TableProps> = ({columns, rows, action}) => {
  return (
    <MTable aria-label="simple table" sx={{marginBorder: '1px solid'}}>
      <TableHead>
        {headers(columns)}
      </TableHead>
      <TableBody>
        {body(columns, rows, action)}
      </TableBody>
    </MTable>
  )
}