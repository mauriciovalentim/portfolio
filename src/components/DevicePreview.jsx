import styles from "./DevicePreview.module.css";
import { useState, useEffect } from "react";
import computer from "../assets/computer.png";
import tablet from "../assets/tablet.png";
import mobile from "../assets/mobile.png";

function DevicePreview({ device, url }) {
    const [version, setVersion] = useState({});

    
    const versionOptions = {
        computer: function () {
            setVersion({
                image: computer,
                styleImage: styles.computer,
                stylePage: styles.webPageComputer,
                styleGlass: styles.glassComputer,
            });
        },
        tablet: function () {
            setVersion({
                image: tablet,
                styleImage: styles.tablet,
                stylePage: styles.webPageTablet,
                styleGlass: styles.glassTablet,
            });
        },
        mobile: function () {
            setVersion({
                image: mobile,
                styleImage: styles.mobile,
                stylePage: styles.webPageMobile,
                styleGlass: styles.glassMobile,
            });
        },
    };

    useEffect(() => {
        versionOptions[device]();
    }, [device]);
    return (
        <div className={styles.deviceContainer}>
            <img src={version.image} alt="" className={version.styleImage} />
            <iframe className={version.stylePage} src={url}></iframe>
            <div className={version.styleGlass}></div>
        </div>
    );
}

export default DevicePreview;
