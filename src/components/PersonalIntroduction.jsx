import styles from "./PersonalIntroduction.module.css";
function PersonalIntroduction() {
    const urls = {
        github: "https://github.com/mauriciovalentim",
        linkedin: "https://www.linkedin.com/in/mauricio-valentim/",
    };
    return (
        <header className={styles.personalIntroduction}>
            <p>Oi, meu nome é Mauricio</p>
            <p className={styles.jobPosition}>
                <span className={styles.specialColor}>WEB</span>
                <a href={urls.github} target="_blank">
                    <span className={`${styles.github}`}></span>
                </a>
                <a href={urls.linkedin} target="_blank">
                    <span className={`${styles.linkedin}`}></span>
                </a>
                <br></br>
                DEVELOPER
            </p>
            <p className={styles.specialColor}>
                Estudante de Análise e desenvolvimento de sistemas no IFPE
            </p>
        </header>
    );
}

export default PersonalIntroduction;
