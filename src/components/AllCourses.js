import React, { useState,useEffect } from "react";
import Course from "./Course";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses=()=>{
    useEffect(()=>{
        document.title="All Courses";
    }, []);

    const getAllCoursesFromServer = () =>{
        axios.get(`http://localhost:9096/courses`).then(
            (response) =>{
                console.log(response.data);
                setCourses(response.data);
                toast.success("courses has been loaded");
            },
            (error) =>{
                console.log(error);
            }
        );
    };

    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);

const[courses,setCourses]=useState([

])
    return (
<div>
    <h1>All Courses</h1>
    <p>List of All courses are as follows</p>
    {
        courses.length>0? courses.map((item)=><Course key={item.id} course={item}/>): "no Courses"
    }
</div>
    );
}

export default AllCourses;