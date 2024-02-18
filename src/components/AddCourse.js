import axios from "axios";
import React, { useState,useEffect, Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse=()=>{

    useEffect(()=>{
document.title = "Add Course || Learn Code with Durgesh"
    },[]);

    const [course, setCourses]=useState({});

    const handleForm = (e) =>{
        postDatatoServer(course);
        console.log(course);
        e.preventDefault(); 
    };

    const postDatatoServer = (data) => {
        axios.post(`http://localhost:9096/courses`,data).then(
            (response)=>{
        console.log(response);
        console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }

    return(
        <Fragment>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    
          <Input type="text" name="userId" id="userId" placeholder="Enter here" onChange={(e)=>{
            setCourses({...course, id: e.target.value });
          }} />

                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Title here" id="title" onChange={(e)=>{
            setCourses({...course, title: e.target.value });
          }} />
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description"  onChange={(e)=>{
            setCourses({...course, description: e.target.value });
          }} /> 
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button color="warning">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;