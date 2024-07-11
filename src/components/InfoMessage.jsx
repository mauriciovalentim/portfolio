import styles from './InfoMessage.module.css'

import { useEffect, useState } from 'react';

import { BsInfoSquare } from "react-icons/bs";
import { useRef } from 'react';


function InfoMessage({msgRef}){
    const [isVisible, setIsVisible] = useState(false);
    const [isClickable, setIsClickable] = useState(true);
    
    function activeInfoMessage() {
        if (isClickable) {
            setIsClickable(false);
            setIsVisible(true);
            setTimeout(() => {
                setIsClickable(true);
                setIsVisible(false);
            }, 5000); 
        } 
    }

    useEffect(() => {
        if (!localStorage.getItem("hasVisited")){
            setTimeout(activeInfoMessage, 2000);
            localStorage.setItem("hasVisited", true)
        }
    }, [0]);
    return (
        <div ref={msgRef}
         className={styles.container}>
            
            <p id={styles.message} className={isVisible ? styles.visible : styles.hidden}>O conteúdo dentro das telas é interativo</p>
            <BsInfoSquare
                    id={styles.infoButton}
                    className={isClickable ? styles.clickable : styles.unclickable}
                    onClick={activeInfoMessage}
            />
        </div>
    )
}

export default InfoMessage;