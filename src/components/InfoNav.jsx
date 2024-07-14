import styles from "./InfoNav.module.css";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function InfoNav() {
    const { pathname } = useLocation();
    useEffect(() => {
        console.log(pathname.split("/"));
    }, [pathname]);
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
