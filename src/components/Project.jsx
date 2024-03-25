import styles from "./Project.module.css";
import Preview from "./Preview";
import { useState, useEffect } from "react";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

function Project({ projects }) {
    //Arrow Flow
    const [arrowsStyle, setArrowStyle] = useState({
        prev: styles.previous,
        next: styles.next,
    });
    const [index, setIndex] = useState(0);

    useEffect(() => {
        stylesControl(index);
    }, [index]);

    function flowControl(direction) {
        let n = index + direction;
        console.log(n);
        setIndex(n);
    }
    function stylesControl(n) {
        const prevStyle = n === 0 ? styles.arrowUnable : styles.previous;
        const nextStyle =
            n + 1 < projects.length ? styles.next : styles.arrowUnable;

        setArrowStyle({
            prev: prevStyle,
            next: nextStyle,
        });
    }

    //Information
    return (
        <div>
            <main className={styles.container}>
                <div className={styles.project}>
                    <Preview info={projects[index]}></Preview>
                    <div className={styles.information}>
                        <div className={styles.papper}>
                            <h2>{projects[index].name}</h2>
                            <p>{projects[index].description}</p>
                            <div className={styles.links}>
                                <a href={projects[index].url} target="_blank">
                                    <GoLinkExternal
                                        className={styles.linkIcons}
                                    />
                                </a>
                                <a href={projects[index].github} target="_blank">
                                    <FaGithub
                                        className={`${styles.linkIcons} ${styles.githubIcon}`}
                                    />
                                </a>
                            </div>
                            <div className={styles.tagContainer}>
                                <h3>stack</h3>
                                {projects[index].tags.map((tag, i) => (
                                    <img
                                        key={i}
                                        src={tag.img}
                                        title={tag.name}
                                        className={styles.tag}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.menuFlow}>
                    <MdOutlineKeyboardArrowLeft
                        className={arrowsStyle.prev}
                        onClick={() => {
                            if (arrowsStyle.prev == styles.previous) {
                                flowControl(-1);
                            }
                        }}
                    />
                    <MdOutlineKeyboardArrowRight
                        className={arrowsStyle.next}
                        onClick={() => {
                            if (arrowsStyle.next == styles.next) {
                                flowControl(1);
                            }
                        }}
                    />
                </div>
            </main>
        </div>
    );
}
export default Project;
