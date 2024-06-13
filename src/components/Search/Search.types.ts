export interface SearchItem{
  label: string
  field: string
  select?: boolean
}

export interface SearchProps{
  items: SearchItem[]
  onSearch: (data: any)=>void
}