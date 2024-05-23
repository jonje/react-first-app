import React, { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";
import {toast} from "react-toastify";

const ManageCoursePage = props => {
    const params = useParams();
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState({

    });
    const [course, setCourse ] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect(() => {
        const slug = params.slug;
        if (slug) {
            setCourse(courseStore.getCourseBySlug(slug));
        }
    }, [params.slug]);

    function handleOnChange({ target }) {
        // ... spread operator used to make copy of course object and set to value passed by event.
        const updatedCourse = {...course, [target.name]: target.value}
        setCourse(updatedCourse);
    }

    function formIsValid() {
        const _errors = {};
        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author is required";
        if (!course.category) _errors.category = "Category is required";

        setErrors(_errors)

        // Form is valid if the errors object is empty
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        courseActions.saveCourse(course).then(() => {
            navigate("/courses");
            toast.success("Course Saved.");
        })
    }
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} errors={errors} onChange={handleOnChange} onSubmit={handleSubmit}/>
        </>
    )
}

export default ManageCoursePage;
