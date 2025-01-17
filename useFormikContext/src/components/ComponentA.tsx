import { useFormik , FormikProvider } from 'formik'
import * as Yup from "yup";
import ComponentB from './ComponentB';
import { Box } from '@mui/material';


type  RegistrationFormValues = {

    name:string,
    password : string
    email : string

}

const ComponentA = () => {

    const formik= useFormik<RegistrationFormValues>({
        initialValues:{

            name:'',
            password:'',
            email:''
        },

    validationSchema : Yup.object({
        name : Yup.string().required("Name is Required"),
        password : Yup.string().required("Password is Required"),
        email: Yup.string().email("Invalid email").required("Email is Required")

    }),


        onSubmit:(values)=>{
            console.log(values)
        }
    })

    const fields =[
        { name :"name" , label:"Name "},
        {name : "password" , label:"Password "},
        {name : "email" , label:"Email"}

    ]

  return (
    <>
    <FormikProvider value={formik}>
        <Box sx={{backgroundColor:"lavenderblush", paddingRight:"30px", paddingTop:"30px", paddingBottom:"30px"}}>
    
      <form onSubmit={formik.handleSubmit}>
        <h1 style={{color:"black"}}>Register</h1>

                {
                    fields.map((field)=>(
                       <ComponentB key={field.name} {...field}/>
                    ))
                }
      
        <button type='submit' style={{}}>Submit</button>
      </form>
</Box>
    </FormikProvider>
    </>
  )
}

export default ComponentA

