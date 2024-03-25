import styles from "./DevicePreview.module.css";
import { useState, useEffect } from "react";
import computer from "../assets/devices/computer.png";
import tablet from "../assets/devices/tablet.png";
import mobile from "../assets/devices/mobile.png";

function DevicePreview({ device, url }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [frameLoaded, setFrameLoaded] = useState(false);
    const [previewReady, setPreviewReady] = useState(false);
    const [key1, setKey1] = useState(0);
    const [key2, setKey2] = useState(1);

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
        setImgLoaded(false);
        setFrameLoaded(false);
        setPreviewReady(false);
        setKey1((prev) => prev + 1);
        setKey2((prev) => prev + 1);
    }, [device]);

    useEffect(() => {
        if (imgLoaded && frameLoaded) {
            setPreviewReady(true);
        }
    }, [imgLoaded, frameLoaded]);
    return (
        <div className={styles.deviceContainer}>
            {!previewReady && <div className={styles.loadingSpinner}></div>}
            <img
                key={key1}
                src={version.image}
                alt="computador"
                className={
                    previewReady ? version.styleImage : styles.loadingHelper
                }
                onLoad={() => setImgLoaded(true)}
            />
            <iframe
                key={key2}
                src={url}
                alt="website"
                className={
                    previewReady ? version.stylePage : styles.loadingHelper
                }
                onLoad={() => setFrameLoaded(true)}
            ></iframe>
            <div
                className={
                    previewReady ? version.styleGlass : styles.loadingHelper
                }
            ></div>
        </div>
    );
}

export default DevicePreview;
