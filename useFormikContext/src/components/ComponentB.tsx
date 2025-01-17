import { useFormikContext } from 'formik'
import React from 'react'
 import TextField from "@mui/material/TextField";


type InputProps={
    name:string,
    label:string
}
const ComponentB : React.FC<InputProps>= ({name , label}) => {

    const {values,handleChange,handleBlur,errors , touched}=useFormikContext<{  [key : string] :string}>()
  return (
    <>
 <div style={{ marginBottom: "16px", display: "flex", alignItems: "center" }}>

    <label htmlFor={name} style={{color : 'black' , marginRight: "8px", minWidth: "100px"}}>{label}</label>
    {/* <input type='text' name={name} onChange={handleChange} onBlur={handleBlur} value={values[name]}></input><br/><br/> */}
    <TextField id={name} label={label}  name={name} value={values[name]} onChange={handleChange} onBlur={handleBlur}variant="outlined"  style={{ flex: 1 }} />
    </div>


          {touched[name] && errors[name] && <p style={{ color: "red" }}>{errors[name]}</p>}


<br /><br />
            
           

    </>
  )
}

export default ComponentB