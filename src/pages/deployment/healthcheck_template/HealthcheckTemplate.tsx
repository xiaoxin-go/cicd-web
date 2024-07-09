import {ApiUri} from "api";
import Rest from "components/Rest";
import {SearchItem} from "components/Search/Search.types";
import {TableColumn} from "components/Table/Table.types";
import {useNavigate} from "react-router-dom";

const searches: SearchItem[] = [
  {field: 'name', label: 'Name'}
]

const columns: TableColumn[] = [
  { field: 'id', title: 'ID', width: 70 },
  { field: 'name', title: 'Name', width: 130 },
  { field: '是否启用liveness', title: 'liveness_enabled', width: 130 },
  { field: '是否启用readiness', title: 'readiness_enabled', width: 130 },
  { field: '是否启用startup', title: 'startup_enabled', width: 130 },
  {field: 'updated_at', title: '更新时间', width: 150},
  {field: 'updated_by', title: '更新人', width: 120},
  {
    field: 'action',
    title: 'Action',
    width: 100,
  }
];


const HealthcheckTemplate = () =>{
  const navigate = useNavigate()
  const onCreate = () =>{
    navigate("/deployment/healthcheck_template/form")
  }
  return (
    <Rest uris={ApiUri.deployment.healthcheckTemplate} searchItems={searches} tableColumns={columns} onCreate={onCreate}></Rest>
  )
}

export default HealthcheckTemplate