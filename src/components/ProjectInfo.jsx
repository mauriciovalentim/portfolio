import styles from "./ProjectInfo.module.css";
import Preview from "./Preview";

function ProjectInfo({ info }) {
    return (
        <main className={styles.container}>
            <div></div>
            <div className={styles.project}>
                <Preview info={info}></Preview>
                <div className={styles.information}>
                    <div className={styles.papper}>
                        <h2>Pokedex</h2>
                        <p>Descrição: {info.description}</p>
                        <p>
                            Tecnologias:{" "}
                            {info.techs.map((t, i) =>
                                i < info.techs.length - 1 ? t + ", " : t
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div></div>
        </main>
    );
}
export default ProjectInfo;
