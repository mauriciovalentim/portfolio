import styles from "./ProjectInfo.module.css";

import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

function ProjectInfo({ project }) {
    return (
        <section className={styles.container}>
            <div className={styles.information}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className={styles.projectLinks}>
                    {project.url && (
                        <a href={project.url} target="_blank">
                            <GoLinkExternal
                                className={styles.projectLinkIcons}
                            />
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank">
                            <FaGithub
                                className={`${styles.projectLinkIcons} ${styles.githubIcon}`}
                            />
                        </a>
                    )}
                </div>
                <div className={styles.techTagContainer}>
                    <h3>stack</h3>
                    <div className={styles.conta}>
                        {project.tags.map((tag, i) => (
                            <div key={i} className={styles.box}>
                                <img
                                    src={tag.img}
                                    alt={tag.name}
                                    title={tag.name}
                                    className={styles.techTag}
                                />
                                <p>{tag.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectInfo;
