import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
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
            <PersonalIntroduction style={{ backgroundColor: "red" }} />

            <HashRouter>
                <MenuNav />
                <div>
                    <div>
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/highlights/contact" />}
                            />
                            <Route
                                path="/highlights/:info"
                                element={
                                    <Project
                                        projects={projects.filter(
                                            (project) => project.highlight
                                        )}
                                    />
                                }
                            />
                            <Route
                                path="/all/:info"
                                element={<AllProjects projects={projects} />}
                            />
                        </Routes>
                    </div>
                    <div>
                        {/* <Information /> */}
                        <Information></Information>
                    </div>
                </div>
            </HashRouter>

            <Gadgets />
        </>
    );
}

export default App;
