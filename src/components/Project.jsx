import styles from "./Project.module.css";
import Preview from "./Preview";
import ProjectInfo from "./ProjectInfo";
import FlowMenu from "./FlowMenu";
import { useState, useEffect, useRef } from "react";
import InfoMessage from "./InfoMessage";

function Project({ projects }) {
    const [index, setIndex] = useState(0);
    const [project, setProject] = useState(projects[index]);
    const message = useRef();
    const [height, setHeight] = useState();
    useEffect(() => {
        setProject(projects[index]);
    }, [index]);

    useEffect(() => {
        setHeight(message.current.offsetHeight)
    }, []);
    // const handleDrag = () => {console.log("Arrastou!")}
    // useEffect(() => {
    //     // boxRef.addEventListener();
    // }, [])
    return (
        <main className={styles.container}>
            <article>
                <div className={styles.project}>
                    <div>
                        <InfoMessage msgRef={message}></InfoMessage>
                        <Preview info={project}></Preview>
                        <div
                            className={styles.placeHelper}
                            style={{
                                height: `${height}px`,
                            }}
                        ></div>
                    </div>
                    <ProjectInfo project={project}></ProjectInfo>
                </div>
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
