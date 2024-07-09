import React, {useState} from "react";
import {
  Box,
  Button,
  Container, FormControl,
  FormControlLabel,
  FormGroup, FormLabel,
  Radio, RadioGroup,
  Switch,
  Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {TemplateData ,Probe} from "./healthcheck_template.types";

const ProbeItem: React.FC<{data: Probe}> = ({data}) =>{
  const changeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log((event.target as HTMLInputElement).value);
  };
  return (<>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">检查类型</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={data?.type}
        onChange={changeType}
      >
        <FormControlLabel value="http" control={<Radio />} label="HTTP请求" />
        <FormControlLabel value="tcp" control={<Radio />} label="TCP端口检查" />
        <FormControlLabel value="command" control={<Radio />} label="命令检查" />
        <FormControlLabel value="grpc" control={<Radio />} label="GRPC检查" />
      </RadioGroup>
    </FormControl>
  </>)
}

const HealthcheckTemplateFrom: React.FC<any> = ()=>{
  const navigate = useNavigate()
  const submit = () =>{

  }
  const cancel = () =>{
    navigate("/deployment/healthcheck_template")
  }

  const [data, setData] = useState<TemplateData>({} as TemplateData)


  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    setData({...data, [key]: event.target.checked});
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        {
          <Typography variant="h4" gutterBottom>
            添加健康检查模板
            </Typography>
        }
        <form noValidate onSubmit={submit}>
          {JSON.stringify(data)}
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked onChange={(event)=>handleChange("liveness_enabled", event)} />} label="启用Liveness" />
            {data.liveness_enabled&&<ProbeItem data={data.liveness_probe}/>}
            <FormControlLabel control={<Switch defaultChecked onChange={(event)=>handleChange("readiness_enabled", event)} />} label="启用Readness" />
            <FormControlLabel control={<Switch defaultChecked onChange={(event)=>handleChange("startup_enabled", event)} />} label="启用Startup" />

          </FormGroup>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Submit
          </Button>
          <Button type="submit" variant="outlined" color="secondary" sx={{ mt: 3,ml: 1 }} onClick={cancel}>
            Cancel
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default HealthcheckTemplateFrom