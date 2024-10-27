import styles from "./InfoNav.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function InfoNav() {
    const { pathname } = useLocation();
    return (
        <div className={styles.choiceContainer}>
            <NavLink
                to={`${pathname.split("/")[1]}/aboutme`}
                className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                }
            >
                SOBRE MIM
            </NavLink>
            <NavLink
                to={`${pathname.split("/")[1]}/school`}
                className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                }
            >
                FORMAÇÃO
            </NavLink>
            <NavLink
                to={`${pathname.split("/")[1]}/experience`}
                className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                }
            >
                EXPERIÊNCIA
            </NavLink>

            <NavLink
                to={`${pathname.split("/")[1]}/contact`}
                className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                }
            >
                CONTATO
            </NavLink>
        </div>
    );
}
