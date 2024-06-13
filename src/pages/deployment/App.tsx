import {ApiUri} from "../../api";
import {SearchItem} from "../../components/Search/Search.types";
import Rest from '../../components/Rest'
import {TableColumn} from "../../components/Table/Table.types";

const searches: SearchItem[] = [
  {field: 'name', label: 'Name'}
]

const columns: TableColumn[] = [
  { field: 'id', title: 'ID', width: 70 },
  { field: 'name', title: 'Name', width: 130 },
  { field: 'service_type', title: 'ServiceType', width: 130 },
  {field: 'updated_at', title: '更新时间', width: 150},
  {field: 'updated_by', title: '更新人', width: 120,},
];


const ResourceTemplate = () =>{
  return (
    <Rest uris={ApiUri.deployment.app} searchItems={searches} tableColumns={columns}></Rest>
  )
}
export default ResourceTemplate