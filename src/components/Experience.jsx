import styles from "./Experience.module.css";
export default function Experience() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h2>BLIP</h2>
                <p>Cargo: Estágiario</p>
                <p>período: 2024.2-o momento</p>
            </div>
            <div className={styles.item}>
                <h2>IFPE</h2>
                <p>Cargo: Pesquisador</p>
                <p>período: 2023.2-o momento</p>
            </div>
        </div>
    );
}
