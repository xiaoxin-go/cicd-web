export interface MenuItem{
  key: string
  path: string
  title: string
  children?: MenuItem[]
}