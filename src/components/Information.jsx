import { Routes, Route } from "react-router-dom";
import styles from "./Information.module.css";
import InfoNav from "./InfoNav";
import Contact from "./Contact";
import AboutMe from "./AboutMe";


export default function Information() {
    

    return (
        <div className={styles.information}>
            <InfoNav />
            <Routes>
                {/* <Route path="/" element={<Navigate to="/contact" />} /> */}
                <Route path={`:view/contact`} element={<Contact />} />
                <Route path={`:view/aboutme`} element={<AboutMe />} />
            </Routes>
        </div>
    );
}
