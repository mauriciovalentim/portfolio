import styles from "./SocialLinks.module.css";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export default function SocialLinks() {
    const urls = {
        github: "https://github.com/mauriciovalentim",
        linkedin: "https://www.linkedin.com/in/mauricio-valentim/",
        whatsapp:
            "https://api.whatsapp.com/send/?phone=5581984268982&text&type=phone_number&app_absent=0",
    };
    return (
        <span className={styles.container}>
            <span className={styles.box}>
                <a href={urls.github} target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare className={styles.social} />
                </a>
                <a href={urls.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.social} />
                </a>
                <a href={urls.whatsapp} target="_blank" rel="noopener noreferrer">
                    <FaWhatsappSquare className={styles.social} />
                </a>
            </span>
        </span>
    );
}
