import {Box, Button, Container, MenuItem, TextField, Typography} from "@mui/material";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {FormProps} from "components/Form/Form.types";

export const Form: React.FC<FormProps> = ({title,data, items, submit, handleCancel}) =>{
  const [formData, setFormData] = useState<any>(data);
  const [errors, setErrors] = useState<any>({});

  const validate = (): boolean => {
    let valid = true;
    let errors = {} as any;
    // verify the format of each item
    items.forEach(item=> {
      if(item.required===true){
        if(!Boolean(formData[item.name])){
          valid = false
          errors[item.name] = `${item.label} is required`
        }
        // if validate exists
        if(item.validate && !item.validate(formData[item.name])){
          valid = false
          errors[item.name] = `${item.label} is invalid`
        }
      }
    })

    setErrors(errors);
    return valid;
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      submit(formData)
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
      <Container maxWidth="sm">
        <Box sx={{ mt: 5 }}>
          {
            Boolean(title)&&<Typography variant="h4" gutterBottom>
              {title}
              </Typography>
          }
          <form noValidate onSubmit={handleSubmit}>
            {
              items.map(item=>{
                return <TextField
                    fullWidth={item.fullWidth!==false}
                    margin="normal"
                    label={item.label}
                    name={item.name}
                    value={formData[item.name]}
                    onChange={handleChange}
                    error={Boolean(errors[item.name])}
                    helperText={errors[item.name]}
                    rows={item.rows}
                    multiline={item.multiline}
                    select={item.select}>
                  {item.data?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                  ))}
                </TextField>
              })
            }
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
              Submit
            </Button>
            <Button type="submit" variant="outlined" color="secondary" sx={{ mt: 3,ml: 1 }} onClick={handleCancel}>
              Cancel
            </Button>
          </form>
        </Box>
      </Container>
      )
}