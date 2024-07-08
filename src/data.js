import html from "./assets/techs/html.png";
import css from "./assets/techs/css.png";
import js from "./assets/techs/javascript.png";
import react from "./assets/techs/react.png";
import godot from "./assets/techs/godot.png";

import nr5 from "./assets/preview/nr5-alpha.png";
import nr12 from "./assets/preview/nr12.png";
import pokedex from "./assets/preview/pokedex.png";
import portfolio from "./assets/preview/portfolio.png";
import sommelibeer from "./assets/preview/sommelibeer.png";

let projects = [
    {
        name: "pokedex",
        img: pokedex,
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
            "Ritual de passagem no desenvolvimento web: Listagem dos 151 primeiros pokémons.",
        highlight: true,
    },
    {
        name: "sommelibeer",
        img: sommelibeer,
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
        highlight: true,
    },
    {
        name: "NR12 Game",
        img: nr12,
        url: "https://rgmelo.github.io/NR12/",
        github: "https://github.com/rgmelo/NR12",
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
            computer: false,
            tablet: false,
            mobile: true,
        },
        description: "Aprendizado gameficado sobre a NR12",
        highlight: false,
    },
    {
        name: "portfólio",
        img: portfolio,
        url: "https://mauriciovalentim.github.io/portfolio/",
        github: "https://github.com/mauriciovalentim/portfolio",
        tags: [
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
        highlight: true,
    },
    {
        name: "NR-5 GAME",
        img: nr5,
        url: "https://itch.io/embed-upload/10444819?color=333333",
        github: false,
        tags: [
            {
                name: "GODOT",
                img: godot,
            },
        ],
        responsiveness: {
            computer: true,
            tablet: true,
            mobile: true,
        },
        description: "Ensino gamificado sobre a NR-5, projeto PIBITI em andamento",
        highlight: true,
    },
];
export default projects;
//https://rgmelo.github.io/NR12/
