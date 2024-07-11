import styles from "./InfoNav.module.css";

export default function InfoNav() {
    return (
        <div className={styles.choiceContainer}>
            {/* <a href="" className="link">
                SOBRE MIM
            </a>
            <a href="" className="link">
                EXPERIÊNCIA
            </a>
            <a href="" className="link">
                FORMAÇÃO
            </a> */}
            <a href="" className="active">
                CONTATO
            </a>
        </div>
    );
}
