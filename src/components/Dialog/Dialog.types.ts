export interface DialogProps{
  open: boolean
  onClose: ()=>void
  title: string
  text: string
  cancelText?: string
  okText?: string
  onOk: ()=>void
}