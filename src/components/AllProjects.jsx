import styles from "./AllProjects.module.css";
import html from "../assets/techs/html.png";
import css from "../assets/techs/css.png";
import react from "../assets/techs/react.png";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

export default function AllProjects({ projects }) {
    return (
        <div className={styles.container}>
            {projects.map((project, i) => (
                <div key={i} className={styles.project}>
                    <img src={project.img} alt="" />
                    <div className={styles.stackContainer}>
                        {project.tags.map((tag, i) => (
                            <img
                            key={i}
                                className={styles.stack}
                                src={tag.img}
                                alt={tag.name}
                                title={tag.name}
                            ></img>
                        ))}
                    </div>
                    <h2>{project.name.toUpperCase()}</h2>
                    <div className={styles.linksContainer}>
                        {project.url && (
                            <a href={project.url} target="_blank">
                                <GoLinkExternal className={styles.link} />
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank">
                                <FaGithub className={styles.link} />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
