import { useEffect, useState } from "react";
import styles from "./PersonalIntroduction.module.css";
import SocialLinks from "./SocialLinks";

function PersonalIntroduction() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <header className={styles.personalIntroduction}>
            {/* <p>Oi, meu nome é Mauricio</p> */}
            <p className={styles.name}>Mauricio Valentim</p>
            {windowWidth < 992 && (
                <p className={styles.jobPosition}>
                    <span className={styles.specialColor}>WEB</span>
                    <br />
                    <span className={styles.developer}>DEVELOPER</span>
                    <br />
                    <SocialLinks />
                </p>
            )}
            {windowWidth >= 992 && (
                <p className={styles.jobPosition}>
                    <span className={styles.specialColor}>WEB</span>
                    <SocialLinks />
                    <br />
                    <span className={styles.developer}>DEVELOPER</span>
                </p>
            )}

            <p className={`${styles.specialColor} ${styles.message}`}>
                Estudante de Análise e desenvolvimento de sistemas no IFPE
            </p>
        </header>
    );
}

export default PersonalIntroduction;
