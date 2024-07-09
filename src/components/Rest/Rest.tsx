import {Search} from "../Search/Search"
import {Pagination} from '../Pagination/Pagination';
import {RestProps} from "components/Rest/Rest.types";
import Loading from '../Loading'
import {Table} from "../Table/Table";
import http, {useRequestPagination} from "utils/http";
import {Button} from "@mui/material";
import Dialog from 'components/Dialog'
import React, {ReactNode, useState} from "react";
import Form from "components/Form";
import Drawer from 'components/Drawer'
import useDialog from "components/useDialog";
import {useAlertContext} from "context/AlertContext";

// delete button


export const Rest: React.FC<RestProps> = ({
                                            uris,
                                            searchItems,
                                            tableColumns,
                                            formItems,
                                            beforeCreate, afterCreate,
                                            beforeUpdate, afterUpdate,
                                            onCreate, onEdit
                                          }) => {
  const [rows, getRows, loading, page, pageSize, count, changePage, changePageSize] = useRequestPagination(uris.list)
  const [row, setRow] = useState<any>({})
  const {showMessage} = useAlertContext()
  const [deleteOpen, onDeleteOpen, closeDeleteOpen] = useDialog()
  const [visible, openDrawer, closeDrawer] = useDialog()
  const [formTitle, setFormTitle] = useState('Create')
  const [formData, setFormData] = useState({})

  const onSearch = (data: any) => {
    getRows(data).then()
  }

  const submit = (data: any) => {
    if (formTitle === 'Create') {
      create(data)
    } else {
      update(data)
    }
  }

  const create = async (data: any) => {
    if(!uris?.create){
      showMessage('warning', 'uris.create is undefined')
      return
    }
    if (beforeCreate) {
      data = beforeCreate(data)
    }
    let res = await http.post(uris.create, data);
    if (res.code === 0) {
      closeDrawer()
      onSearch({})
      showMessage('success', res.msg as string)
    } else {
      console.log("error", res.msg)
      showMessage('error', res.msg as string)
    }
  }
  const update = async (data: any) => {
    if (!uris?.update){
      showMessage('warning', 'uris.update is undefined')
      return
    }
    if (beforeUpdate) {
      data = beforeUpdate(data)
    }
    let res = await http.put(uris.update, data);
    if (res.code === 0) {
      closeDrawer()
      onSearch({})
      showMessage('success', res.msg as string)
    } else {
      console.log("error", res.msg)
      showMessage('error', res.msg as string)
    }
  }
  const clickCreate = () =>{
    // 点击添加事件
    if (onCreate){
      onCreate()
      return
    }
    setFormTitle("Create")
    setFormData({})
    openDrawer()
  }
  const clickEdit = (row: any) => {
    setFormTitle("Update")
    setFormData(row)
    openDrawer()
  }
  const clickDelete = (row: any) => {
    onDeleteOpen()
    setRow(row)
  }
  const action = (row: any): ReactNode => {
    return (
      <>
        <Button size="small" sx={{height: '24px', minWidth: '40px'}} onClick={() => {
          clickEdit(row)
        }}>Edit</Button>
        <Button size="small" sx={{height: '24px'}} onClick={() => {
          clickDelete(row)
        }}>Delete</Button>
      </>
    )
  }
  const onDelete = async () => {
    if(!uris.delete){
      showMessage('warning', 'uris.delete is undefined')
      return
    }
    let res = await http.remove(uris.delete, {name: row.name})
    if (res.code === 0) {
      showMessage('success', res.msg as string)
      closeDeleteOpen()
      onSearch({})
    } else {
      showMessage('success', res.msg as string)
    }
  }
  return (
    <>
      <Loading loading={loading}></Loading>
      <div className={'container-header'}>
        <Search items={searchItems} onSearch={onSearch}></Search>
        <Button variant="contained" size="small" sx={{ml: 1.2}} onClick={clickCreate}>添加</Button>
      </div>
      {/* 表格 */}
      <Table columns={tableColumns} rows={rows} action={(row) => action(row)}></Table>
      {/* 分页 */}
      <Pagination page={page} pageSize={pageSize} count={count} changePage={changePage}
                  changePageSize={changePageSize}/>
      {/* drawer */}
      {
        formItems &&
          <Drawer open={visible} onClose={closeDrawer} title={formTitle}>
            <Form submit={submit} items={formItems} data={formData}/>
          </Drawer>
      }
      {/* delete dialog */}
      <Dialog open={deleteOpen}
              onClose={closeDeleteOpen}
              title='Delete Confirm'
              text={'You sure you want to deleted ' + row?.name}
              onOk={onDelete}/>
      {/* alert */}
    </>
  )
}