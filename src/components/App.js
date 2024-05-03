import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import {Route, Routes} from "react-router-dom";
import CoursesPage from "./CoursesPage";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="courses" element={<CoursesPage/>}/>
                <Route path="about" element={<AboutPage/>}/>
            </Routes>
        </div>
    )
}

export default App;