export const increment = (): { type: string } => ({
  type: 'INCREMENT'
});

export const decrement = (): { type: string } => ({
  type: 'DECREMENT'
});

export const ShowAlert = (type: string, text: string) =>({
  type: type,
  text: text,
  open: true
})

export const HiddenAlert = () =>(
  {
    type: '',
    text: '',
    open: false
  }
)