/*import "./App.css";*/
import PersonalIntroduction from "./components/PersonalIntroduction";
import Project from "./components/Project";
import projects from "./data"

function App() {
    return (
        <>
            <PersonalIntroduction></PersonalIntroduction>
            <Project projects={projects}></Project>
        </>
    );
}

export default App;
