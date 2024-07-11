import { NavLink } from "react-router-dom";
import styles from "./ProjectNav.module.css";
export default function MenuNav() {
    return (
        <nav className={styles.choiceContainer}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to="/highlights"
            >
                DESTAQUE
            </NavLink>
            <NavLink className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link} to="/all">
                TODOS
            </NavLink>
        </nav>
    );
}
