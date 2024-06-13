import {TableColumn} from "components/Table/Table.types";
import {FormItem} from "components/Form/Form.types";
import {SearchItem} from "components/Search/Search.types";

export interface RestUris{
  list: string
  get?: string
  create?: string
  update?: string
  delete?: string
}
export interface RestProps{
  uris: RestUris
  searchItems: SearchItem[]
  tableColumns: TableColumn[]
  formItems?: FormItem[]
  beforeCreate?: (data: any)=>any
  afterCreate?: (data: any)=>void
  beforeUpdate?: (data: any)=>any
  afterUpdate?: (data: any) =>any
}