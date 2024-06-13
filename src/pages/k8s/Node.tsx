import {ApiUri} from "api";
import {SearchItem} from "components/Search/Search.types";
import Rest from 'components/Rest'
import {TableColumn} from "components/Table/Table.types";

const searches: SearchItem[] = [
  {field: 'name', label: 'Name'}
]

const columns: TableColumn[] = [
  { field: 'id', title: 'ID', width: 70 },
  { field: 'name', title: 'Name', width: 130 },
  { field: 'address', title: 'Address', width: 130 },
  {
    field: 'status',
    title: 'Status',
    width: 120
  },
  {
    field: 'create_time',
    title: '创建时间',
    width: 150
  },
  {
    field: 'cpu',
    title: 'Cpu',
    width: 120,
  },
  {
    field: 'memory',
    title: 'Memory',
    width: 120,
  },
  {
    field: 'pod_count',
    title: 'Pods',
    width: 120,
  },
];


export const Node = () =>{
  return (
    <Rest uris={ApiUri.k8s.node} searchItems={searches} tableColumns={columns}></Rest>
  )
}