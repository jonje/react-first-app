import React, { useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import CourseForm from "./CourseForm";
import * as CourseApi from "../api/courseApi"

const ManageCoursePage = props => {
    const params = useParams();
    const navigate = useNavigate();
    const [course, setCourse ] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    function handleOnChange({ target }) {
        // ... spread operator used to make copy of course object and set to value passed by event.
        const updatedCourse = {...course, [target.name]: target.value}
        setCourse(updatedCourse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        CourseApi.saveCourse(course).then(() => {
            navigate("/courses");
        })
    }
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleOnChange} onSubmit={handleSubmit}/>
        </>
    )
}

export default ManageCoursePage;
