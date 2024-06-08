import styles from "./FlowMenu.module.css";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";

import { useState, useEffect } from "react";
function FlowMenu({ index, setIndex, range }) {
    const [arrowsStyle, setArrowStyle] = useState({
        prev: styles.previous,
        next: styles.next,
    });

    useEffect(() => {
        stylesControl(index);
    }, [index]);

    function flowControl(direction) {
        setIndex(index + direction);
        console.log(range)
    }
    function stylesControl(n) {
        const prevStyle = n === 0 ? styles.arrowUnable : styles.previous;
        const nextStyle =
            n + 1 < range ? styles.next : styles.arrowUnable;

        setArrowStyle({
            prev: prevStyle,
            next: nextStyle,
        });
    }
    return (
        <article >
            <div className={styles.dots}>
                <FaDotCircle className={styles.dot} id={index == 0 ? styles.active : styles.unable}/>
                <FaDotCircle className={styles.dot} id={index == 1 ? styles.active : styles.unable}/>
                <FaDotCircle className={styles.dot} id={index == 2 ? styles.active : styles.unable}/>
            </div>
            <div className={styles.menuFlow}>
                <MdOutlineKeyboardArrowLeft
                    className={arrowsStyle.prev}
                    onClick={() => {
                        if (arrowsStyle.prev == styles.previous) {
                            flowControl(-1);
                        }
                    }}
                />
                <MdOutlineKeyboardArrowRight
                    className={arrowsStyle.next}
                    onClick={() => {
                        if (arrowsStyle.next == styles.next) {
                            flowControl(1);
                        }
                    }}
                />
            </div>
        </article>
    );
}

export default FlowMenu;
