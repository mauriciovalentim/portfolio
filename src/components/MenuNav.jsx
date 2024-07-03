import { NavLink } from "react-router-dom";
import styles from "./MenuNav.module.css";
export default function MenuNav() {
    return (
        <nav className={styles.choiceContainer}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to="/portfolio/highlights"
            >
                Destaque
            </NavLink>
            <NavLink className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link} to="/portfolio/all">
                Todos
            </NavLink>
        </nav>
    );
}
