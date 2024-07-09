export interface FormItem{
  label: string
  name: string
  required?: boolean
  tagType?: string
  placeholder? :string
  fullWidth?: boolean
  validate?:(value: any)=>boolean
  multiline?: boolean
  rows?: number
  select?: boolean
  data?: {label: string, value: any}[]
  type?: 'number'
}

export interface FormProps{
  title?: string
  data: any
  items: FormItem[]
  handleCancel?: ()=>void
  submit: (value: any)=>void
}