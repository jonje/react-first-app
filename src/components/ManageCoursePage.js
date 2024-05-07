import React, { useState } from "react";
import {useParams} from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
    const params = useParams();
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
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleOnChange}/>
        </>
    )
}

export default ManageCoursePage;
