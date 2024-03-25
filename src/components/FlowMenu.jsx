import styles from "./FlowMenu.module.css";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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
        <article className={styles.menuFlow}>
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
        </article>
    );
}

export default FlowMenu;
