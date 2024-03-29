import React from "react";
import "./sass/style.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import ProjectPage from "./components/Projects/projectPage";
import ProjectDetail from "./components/Projects/projectDetail";

function App() {
    return (
        <Router>
            <main>
            <div className="nav-logo">
                <a href="/">
                    MB
                </a>
            </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/projects" element={<ProjectPage />} />
                </Routes>
                <Navbar />
            </main>
        </Router>
    );
}

export default App;
