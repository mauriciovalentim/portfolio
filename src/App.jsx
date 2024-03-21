/*import "./App.css";*/
import PersonalIntroduction from "./components/PersonalIntroduction";
import ProjectInfo from './components/ProjectInfo'
function App() {
    let info = {
        url: "https://mauriciovalentim.github.io/pokedex/",
        techs: ["HTML", "CSS", "Javascript", "API Rest"],
        responsiveness: {
            pc: true,
            tablet: true,
            phone: true,
        },
        description: "Aplicativo com listagem dos 151 primeiros pokemons",
    };
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <PersonalIntroduction></PersonalIntroduction>
            <ProjectInfo info={info}></ProjectInfo>
        </>
    );
}

export default App;
