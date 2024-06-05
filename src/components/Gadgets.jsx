import styles from "./Gadgets.module.css"
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";
function Gadgets(){
    function scrollBack(){
        window.scrollTo(0, 0)
    }
    const [isScroll, setIsScroll] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(scrollY)
    useEffect(()=>{
        if (scrollPosition >= 350) {
            setIsScroll(true)
        }
        else {
            setIsScroll(false)
        }
    }, [scrollPosition])
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(scrollY)
        })
    }, [])
    return (
        <div>
            <a href="https://wa.me/5581984268982?text=" target="_blank" id={styles.whatsapp}></a>
            <MdOutlineKeyboardArrowUp id={styles.scrollBack} className={isScroll ? styles.visible : styles.hidden} onClick={scrollBack}/>
        </div>
    )
}

export default Gadgets