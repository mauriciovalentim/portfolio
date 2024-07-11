import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import PersonalIntroduction from "./components/PersonalIntroduction";
import Project from "./components/Project";
import projects from "./data";
import Gadgets from "./components/Gadgets";
import MenuNav from "./components/ProjectNav";
import AllProjects from "./components/AllProjects";

import Information from "./components/Information";

function App() {
    return (
        <>
            <PersonalIntroduction
                style={{ backgroundColor: "red" }}
            ></PersonalIntroduction>

            <HashRouter>
                <MenuNav />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/highlights" />}
                    />
                    <Route
                        path="/highlights"
                        element={
                            <Project
                                projects={projects.filter(
                                    (project) => project.highlight === true
                                )}
                            />
                        }
                    />
                    <Route
                        path="/all"
                        element={<AllProjects projects={projects} />}
                    />
                </Routes>
            </HashRouter>
            <Information />
            <Gadgets></Gadgets>
        </>
    );
}

export default App;
