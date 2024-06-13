import {useState} from "react";
import {AlertType} from "components/Alert/alert.types";

export const useAlert = (): [boolean, AlertType, string, (type: AlertType, text: string)=> void, ()=>void] =>{
  const [open, setOpen] = useState<boolean>(false)
  const [type, setType] = useState<AlertType>("success")
  const [text, setText] = useState<string>("")

  const showAlert = (type: AlertType, text: string) => {
    setType(type)
    setText(text)
    setOpen(true)
  }
  const closeAlert = () =>{
    setOpen(false)
  }

  return [open, type, text, showAlert, closeAlert]
}