import {ApiUri} from "api";
import Rest from 'components/Rest'
import {TableColumn} from "components/Table/Table.types";
import {SearchItem} from "components/Search/Search.types";

const searches: SearchItem[] = [
  {field: 'name', label: 'Name'}
]


const columns: TableColumn[] = [
  { field: 'id', title: 'ID', width: 70 },
  { field: 'name', title: 'Name', width: 130 },
  { field: 'namespace', title: 'Namespace', width: 130 },
  {
    field: 'cluster_ip',
    title: 'ClusterIp',
    width: 120
  },
  {
    field: 'type',
    title: 'Type',
    width: 120,
  },
  {
    field: 'ports',
    title: 'Ports',
    width: 180,
    valueGetter: (row)=>
      row.ports.map((item: any)=>`${item.protocol}:${item.port}`).join('/')
  },
  {
    field: 'create_time',
    title: '创建时间',
    width: 150,
  },
];


export const Service = () =>{
  return (
    <Rest uris={ApiUri.k8s.service} searchItems={searches} tableColumns={columns}></Rest>
  )
}