import {AlertType} from "components/Alert/alert.types";
import {ReactNode, useContext, useState ,createContext} from "react";

interface AlertContextType {
  open: boolean
  type: AlertType
  text: string
  duration?: number
  showMessage: (type: AlertType, text: string, duration?: number) => void;
  hideMessage: () => void
}


const AlertContext  = createContext<AlertContextType|undefined>(undefined);

// Create a provider component
const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<AlertType>('success')
  const [text, setText] = useState('')
  const [duration, setDuration] = useState(6)

  const showMessage = (type: AlertType, text: string, duration?: number) =>{
    console.log("----------> message")
    setOpen(true)
    setText(text)
    setType(type)
    if (duration){
      setDuration(duration)
    }
    console.log(open, type, text)
  }
  const hideMessage = () =>{
    setOpen(false)
    setText('')
    setType('success')
  }

  return (
    <AlertContext.Provider value={{ open, type, text, duration, showMessage, hideMessage }}>
      {children}
  </AlertContext.Provider>
);
};

// Create a custom hook to use the context
const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export { AlertProvider, useAlertContext };