import React from 'react';
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import axios from "axios";

function CreatePost() {

    const initialValues = {
        title:"",
        PostText:"",
        username:""
    }

    const validateSchema = Yup.object().shape({
        title:Yup.string().required(),
        PostText:Yup.string().required(),
        username:Yup.string().required(),
    });

    const onSubmit = (data) =>
    {
        axios.get("http://localhost:3001/posts",data).then((response)=>
        {
            console.log("it is working");
        }); 
    }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateSchema} >
            <Form>
                {/* save as database name = "tile"  */}
                <label>Title</label>
                <ErrorMessage name="title" />
                <Field id="inputCreatePost" name="title" placeholder="Enter Title" />

                <label>Title</label>
                <ErrorMessage name="PostText" />
                <Field id="inputCreatePost" name="PostText" placeholder="Enter Post Text" />

                <label>Username</label>
                <ErrorMessage name="username" />
                <Field id="inputCreatePost" name="username" placeholder="Enter Title" />


                <button type="submit">Create Posts</button>


            </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
