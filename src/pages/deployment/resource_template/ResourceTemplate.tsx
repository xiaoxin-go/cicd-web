import {ApiUri} from "api";
import {SearchItem} from "components/Search/Search.types";
import Rest from 'components/Rest'
import {TableColumn} from "components/Table/Table.types";
import {FormItem} from "../../../components/Form/Form.types";

const searches: SearchItem[] = [
  {field: 'name', label: 'Name'}
]

const columns: TableColumn[] = [
  { field: 'id', title: 'ID', width: 70 },
  { field: 'name', title: 'Name', width: 130 },
  { field: 'cpu', title: 'Cpu', width: 130 },
  {field: 'memory', title: 'Memory', width: 120},
  {field: 'updated_at', title: '更新时间', width: 150},
  {field: 'updated_by', title: '更新人', width: 120,},
];

const formItems: FormItem[] = [
  {label: 'Name', name: 'name'},
  {label: 'Cpu', name: 'cpu'},
  {label: 'Memory', name: 'memory',},
  {label: 'MemoryUnit', name: 'memory_unit',  select: true, data: [
      {label: 'MB', value: 'Mi'},
      {label: 'GB', value: 'Gi'},
    ]},
  {label: 'Description', name: 'description'},
]


const ResourceTemplate = () =>{
  return (
    <Rest uris={ApiUri.deployment.resourceTemplate} searchItems={searches} tableColumns={columns} formItems={formItems}></Rest>
  )
}
export default ResourceTemplate