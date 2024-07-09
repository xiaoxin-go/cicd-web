import {ApiUri} from "api";
import {SearchItem} from "components/Search/Search.types";
import Rest from 'components/Rest'
import {TableColumn} from "components/Table/Table.types";
import {FormItem} from "components/Form/Form.types";

const searches: SearchItem[] = [
  {field: 'name', label: 'Name'}
]

const columns: TableColumn[] = [
  { field: 'id', title: 'ID', width: 70 },
  { field: 'name', title: 'Name', width: 130 },
  { field: 'service_type', title: 'ServiceType', width: 130, tag: 'chip', colorGetter: (row: any)=>row.service_type==='state'?'success':'warning'},
  {field: 'updated_at', title: '更新时间', width: 150},
  {field: 'updated_by', title: '更新人', width: 120,},
];

const forms: FormItem[] = [
  {name: 'name', label: '应用名', required: true},
  {name: 'service_type', label: '应用类型', required: true, select: true, data: [
    {label: '有状态', value: 'stated'},
    {label: '无状态', value: 'stateless'},
    ]},
  {name: 'description', label: '描述', multiline: true},
]

const ResourceTemplate = () =>{
  return (
    <Rest uris={ApiUri.deployment.app} searchItems={searches} tableColumns={columns} formItems={forms}></Rest>
  )
}
export default ResourceTemplate