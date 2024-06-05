import "./App.css";
import PersonalIntroduction from "./components/PersonalIntroduction";
import Project from "./components/Project";
import projects from "./data"
import Gadgets from "./components/Gadgets";



function App() {
    return (
        <>
            <PersonalIntroduction></PersonalIntroduction>
            <Project projects={projects}></Project>
            <Gadgets></Gadgets>
        </>
    );
}

export default App;
