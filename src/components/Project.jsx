import styles from "./Project.module.css";
import Preview from "./Preview";
import ProjectInfo from "./ProjectInfo";
import FlowMenu from "./FlowMenu";
import { useState, useEffect } from "react";

function Project({ projects }) {
    const [index, setIndex] = useState(0);
    const [project, setProject] = useState(projects[index]);

    useEffect(() => {
        setProject(projects[index]);
    }, [index]);

    return (
        <main className={styles.container}>
            <article>
                <section className={styles.project}>
                    <Preview info={project}></Preview>
                    <ProjectInfo project={project}></ProjectInfo>
                </section>
                <section>
                    <FlowMenu
                        index={index}
                        setIndex={setIndex}
                        range={projects.length}
                    ></FlowMenu>
                </section>
            </article>
        </main>
    );
}
export default Project;
