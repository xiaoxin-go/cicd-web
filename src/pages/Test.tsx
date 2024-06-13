import Button from "@mui/material/Button";
import {useAlertContext} from "context/AlertContext";

const Test = () =>{
  const {showMessage} = useAlertContext()

  return (
    <Button onClick={() =>{showMessage('success', 'hello world')}}>click</Button>
  )
}

export default Test