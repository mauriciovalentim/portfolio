import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonalIntroduction from "./components/PersonalIntroduction";
import Project from "./components/Project";
import projects from "./data";
import Gadgets from "./components/Gadgets";
import MenuNav from "./components/MenuNav";
import AllProjects from "./components/AllProjects";

function App() {
    return (
        <>
            <PersonalIntroduction></PersonalIntroduction>
            <BrowserRouter>
                <MenuNav></MenuNav>
                <Routes>
                    <Route path="/portfolio" element={<Navigate to='/portfolio/highlights'/>}/>
                    <Route
                        path="/portfolio/highlights"
                        element={<Project projects={projects} />}
                    ></Route>
                    <Route
                        path="/portfolio/all"
                        element={<AllProjects />}
                    ></Route>
                </Routes>
            </BrowserRouter>
            {/* <Project projects={projects}></Project> */}
            <Gadgets></Gadgets>
        </>
    );
}

export default App;
