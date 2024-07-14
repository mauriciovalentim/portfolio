import { NavLink, useLocation } from "react-router-dom";
import styles from "./ProjectNav.module.css";
import { useEffect } from "react";

export default function MenuNav() {
    const { pathname } = useLocation();
    useEffect(() => {
        console.log(pathname.split("/"));
    }, [pathname]);
    return (
        <nav className={styles.choiceContainer}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to={`/highlights/${pathname.split("/")[2]}`}
            >
                DESTAQUE
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to={`/all/${pathname.split("/")[2]}`}
            >
                TODOS
            </NavLink>
        </nav>
    );
}
