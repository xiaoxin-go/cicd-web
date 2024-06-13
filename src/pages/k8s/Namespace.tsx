import {ApiUri} from "api";
import Rest from 'components/Rest'
import {FormItem} from "components/Form/Form.types";
import {TableColumn} from "components/Table/Table.types";
import {SearchItem} from "components/Search/Search.types";

const searches: SearchItem[] = [
  {field: 'name', label: 'Name'}
]

const columns: TableColumn[] = [
  {field: 'id', title: 'ID', width: 70},
  {field: 'name', title: 'Name', width: 130},
  {
    field: 'status',
    title: 'Status',
    width: 150
  },
  {
    field: 'labels',
    title: 'Labels',
    width: 300,
    valueGetter: (row)=>row.labels&&JSON.stringify(row.labels)
  },
  {
    field: 'create_time',
    title: 'CreateTime',
    width: 150,
  },
  {
    field: 'action',
    title: 'Action',
    width: 100,
  }
];

const beforeCreate = (data: any) =>{
  let labels: any = {}
  if (Boolean(data.labels)){
    labels = JSON.parse(data.labels)
  }
  return {...data, labels: labels}
}
const formItems: FormItem[] = [
  {label: 'Name', name: 'name', required: true},
  {label: 'Labels', name: 'labels', multiline: true, rows: 4,
    validate: (value): boolean=>{
      try{
        JSON.parse(value)
      }catch (e) {
        return false
      }
      return true
    }},
]
export const Namespace = () => {
  return (
    <Rest uris={ApiUri.k8s.namespace}
          searchItems={searches}
          tableColumns={columns}
          formItems={formItems} beforeCreate={beforeCreate} beforeUpdate={beforeCreate}/>
  )
}