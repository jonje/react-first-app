import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import {Route, Routes} from "react-router-dom";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import {ToastContainer} from "react-toastify";
import "./App.css"
import "react-toastify/dist/ReactToastify.css"

function App() {
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar/>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="courses" element={<CoursesPage/>}/>
                <Route path="/course/:slug" element={<ManageCoursePage/>}/>
                <Route path="/course" element={<ManageCoursePage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
