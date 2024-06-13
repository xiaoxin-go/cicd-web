export type AlertType = 'success' | 'error' | 'warning' | 'info';
export interface AlertProps{
  open: boolean
  type: AlertType,
  duration?: number
  text: string
  onClose: ()=>void
}