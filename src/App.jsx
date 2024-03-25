/*import "./App.css";*/
import PersonalIntroduction from "./components/PersonalIntroduction";
import Project from "./components/Project";
import html from "./assets/techs/html.png";
import css from "./assets/techs/css.png";
import js from "./assets/techs/javascript.png";
import react from "./assets/techs/react.png";

function App() {
    let projects = [
        {
            name: "pokedex",
            url: "https://mauriciovalentim.github.io/pokedex/",
            github: "https://github.com/mauriciovalentim/pokedex",
            tags: [
                {
                    name: "HTML",
                    img: html,
                },
                {
                    name: "CSS",
                    img: css,
                },
                {
                    name: "Javascript",
                    img: js,
                },
            ],

            responsiveness: {
                computer: true,
                tablet: true,
                mobile: true,
            },
            description:
                "Ritual de passagem no desenvolvimento web: Listagem dos 151 primeiros Pokémon.",
        },
        {
            name: "sommelibeer",
            url: "https://gabrielsoarespebr.github.io/sommelibeer/",
            github: "https://github.com/gabrielsoarespebr/sommelibeer",
            tags: [
                {
                    name: "HTML",
                    img: html,
                },
                {
                    name: "CSS",
                    img: css,
                },
                {
                    name: "Javascript",
                    img: js,
                },
            ],
            responsiveness: {
                computer: true,
                tablet: false,
                mobile: false,
            },
            description:
                "Protótipo de um site para comparação de informações e preços de bebidas.",
        },
        {
            name: "portfólio",
            url: "https://mauriciovalentim.github.io/portfolio/",
            github: "https://github.com/mauriciovalentim/portfolio",
            tags: [
                {
                    name: "HTML",
                    img: html,
                },
                {
                    name: "CSS",
                    img: css,
                },
                {
                    name: "Javascript",
                    img: js,
                },
                {
                    name: "React",
                    img: react,
                },
            ],
            responsiveness: {
                computer: true,
                tablet: false,
                mobile: false,
            },
            description: "Listagem de informações e projetos pessoais",
        },
    ];
    return (
        <>
            <PersonalIntroduction></PersonalIntroduction>
            <Project projects={projects}></Project>
        </>
    );
}

export default App;
