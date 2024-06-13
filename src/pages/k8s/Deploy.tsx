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
    field: 'replicas',
    title: 'Replicas',
    width: 120
  },

  {
    field: 'ready_replicas',
    title: 'ReadyReplicas',
    width: 120,
  },
  {
    field: 'create_time',
    title: '创建时间',
    width: 150
  },
];


export const Deploy = () => {
  return (
    <Rest uris={ApiUri.k8s.deploy} searchItems={searches} tableColumns={columns}></Rest>
  )
}