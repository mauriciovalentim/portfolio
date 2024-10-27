import styles from "./School.module.css";
export default function School() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h2>análise e desenvolvimento de sistemas</h2>
                <p>IFPE - Instituto Federal de Pernambuco</p>
                <p>nível: Tecnólogo</p>
                <p>período: 2022-o momento</p>
            </div>
            <div className={styles.item}>
                <h2>Desenvolvimento de sistemas</h2>
                <p>ete advogado josé david gil rodrigues</p>
                <p>nível: Técnico</p>
                <p>período: 2019-2021</p>
            </div>
        </div>
    );
}
