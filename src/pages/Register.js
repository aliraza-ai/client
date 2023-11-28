import React from 'react'
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import axios from "axios";

function Register() {
    const initialValues = {
        password:"",
        username:""
    }

    const validateSchema = Yup.object().shape({
        username:Yup.string().min(3).max(15).required(),
        password:Yup.string().min(4).max(20).required(),
    });

    const onSubmit = (data) =>
    {
        axios.post("http://localhost:3001/auth",data).then((response)=>
        {
            console.log(response.data);
        }); 
    }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateSchema} >
            <Form>
            

                <label>Username</label>
                <ErrorMessage name="username" />
                <Field  name="username" placeholder="Enter username" />
                <label>Password</label>
                <ErrorMessage name="password" />
                <Field  type="password" name="password" placeholder="Enter Password" />
                
                <button type="submit">Register Now</button>


            </Form>
      </Formik>
    </div>
  );
}


export default Register
