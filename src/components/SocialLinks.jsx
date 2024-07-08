import styles from "./SocialLinks.module.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function SocialLinks() {
    const urls = {
        github: "https://github.com/mauriciovalentim",
        linkedin: "https://www.linkedin.com/in/mauricio-valentim/",
        whatsapp:
            "https://api.whatsapp.com/send/?phone=5581984268982&text&type=phone_number&app_absent=0",
    };
    return (
        <span className={styles.container}>
            {" "}
            <a
                href={urls.github}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub className={styles.github} />
            </a>
            <a
                href={urls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin className={styles.linkedin} />
            </a>
            <a
                href={urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className={styles.whatsapp} />
            </a>
        </span>
    );
}
