import Rest from 'components/Rest'
import {TableColumn} from "components/Table/Table.types";
import {SearchItem} from "components/Search/Search.types";
import {ApiUri} from "api";

const searches: SearchItem[] = [
  {field: 'ip', label: 'PodIP'}
]

const columns: TableColumn[]  = [
  { field: 'id', title: 'ID', width: 70 },
  { field: 'name', title: 'Name', width: 130 },
  { field: 'node_name', title: 'Node', width: 130 },
  {field: 'namespace', title: 'Namespace', width: 90,},
  {
    field: 'host_ip',
    title: 'HostIp',
    width: 160,
  },
  {
    field: 'pod_ip',
    title: 'PodIp',
    width: 160,
  },
  {
    field: 'status',
    title: '状态',
    width: 120,
    tag: "chip",
    color: "success"
  },
  {
    field: 'create_time',
    title: '创建时间',
    width: 150
  },
  {
    field: 'start_time',
    title: '运行时间',
    width: 150,
  },
];


export const Pod = () =>{
  return (
    <Rest uris={ApiUri.k8s.pod} searchItems={searches} tableColumns={columns}></Rest>
  )
}