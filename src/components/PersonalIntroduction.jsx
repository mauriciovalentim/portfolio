import styles from "./PersonalIntroduction.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


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
                <a href={urls.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    {/* <span className={styles.github}></span> */}
                    <FaGithub className={styles.github}/>
                </a>
                <a href={urls.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    {/* <span className={styles.linkedin}></span>     */}
                    <FaLinkedin className={styles.linkedin}/>

                </a>
                <br />
                <span className={styles.developer}>DEVELOPER</span>
            </p>
            <p className={styles.specialColor}>
                Estudante de Análise e desenvolvimento de sistemas no IFPE
            </p>
        </header>
    );
}

export default PersonalIntroduction;

