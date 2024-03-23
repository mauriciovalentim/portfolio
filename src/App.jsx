/*import "./App.css";*/
import PersonalIntroduction from "./components/PersonalIntroduction";
import ProjectInfo from "./components/ProjectInfo";
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
    let info2 = {
        url: "https://gabrielsoarespebr.github.io/sommelibeer/",
        description: "Site de comparação de preço de bebidas",
        techs: ["HTML", "CSS", "Javascript", "API Rest"],
    };
    return (
        <>
            <PersonalIntroduction></PersonalIntroduction>
            <ProjectInfo info={info}></ProjectInfo>
        </>
    );
}

export default App;
