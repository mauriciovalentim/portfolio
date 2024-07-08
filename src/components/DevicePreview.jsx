import styles from "./DevicePreview.module.css";
import { useState, useEffect, useRef } from "react";
import computer from "../assets/devices/computer.png";
import tablet from "../assets/devices/tablet.png";
import mobile from "../assets/devices/mobile.png";

function DevicePreview({ device, url }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [frameLoaded, setFrameLoaded] = useState(false);
    const [previewReady, setPreviewReady] = useState(false);
    const [key1, setKey1] = useState(0);
    const [key2, setKey2] = useState(1);
    const deviceContainer = useRef(null);
    const page = useRef(null);
    const [width, setWidth] = useState(100);
    const [pageOption, setPageOption] = useState("computer");
    const [mobileHeight, setMobileHeight] = useState("");
    const [srcTransition, setSrcTransition] = useState(1);

    const [version, setVersion] = useState({});
    const versionOptions = {
        computer: function () {
            setVersion({
                image: computer,
                styleImage: styles.computer,
                stylePage: styles.webPageComputer,
                styleGlass: styles.glassComputer,
            });
            setPageOption("computer");
        },
        tablet: function () {
            setVersion({
                image: tablet,
                styleImage: styles.tablet,
                stylePage: styles.webPageTablet,
                styleGlass: styles.glassTablet,
            });
            setPageOption("tablet");
        },
        mobile: function () {
            setVersion({
                image: mobile,
                styleImage: styles.mobile,
                stylePage: styles.webPageMobile,
                styleGlass: styles.glassMobile,
            });
            setPageOption("mobile");
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
            //aqui para mudar spin
        }
    }, [imgLoaded, frameLoaded]);

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (deviceContainer.current) {
    //             setWidth(deviceContainer.current.offsetWidth);
    //         }
    //     };

    //     handleResize();

    //     window.addEventListener("resize", handleResize);

    //     // Limpa o event listener ao desmontar o componente
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    const sizeOptions = {
        computer: function () {
            let screen = deviceContainer.current.offsetWidth / 1706;
            screen *= 0.92;
            setWidth(screen);
            setMobileHeight(deviceContainer.current.offsetHeight);
        },
        tablet: function () {
            let screen = deviceContainer.current.offsetWidth / 1024;
            screen *= 0.92;
            setWidth(screen);
        },
        mobile: function () {
            let screen = deviceContainer.current.offsetWidth / 430;
            screen *= 0.926;
            setWidth(screen);
        },
    };

    useEffect(() => {
        if (previewReady) {
            sizeOptions[pageOption]();
            setSrcTransition(1);
        } else {
            setSrcTransition(0);
        }
    }, [previewReady]);

    return (
        <div className={styles.deviceContainer}>
            {!previewReady && (
                <div
                    className={styles.spinnerContainer}
                    style={{
                        height: `${mobileHeight}px`,
                    }}
                >
                    <div className={styles.loadingSpinner}></div>
                </div>
            )}

            {pageOption != "mobile" && (
                <img
                    key={key1}
                    src={version.image}
                    alt="computador"
                    ref={deviceContainer}
                    className={
                        previewReady ? version.styleImage : styles.loadingHelper
                    }
                    style={{
                        opacity: `${srcTransition}`,
                    }}
                    onLoad={() => setImgLoaded(true)}
                />
            )}
            {pageOption == "mobile" && (
                <img
                    key={key1}
                    src={version.image}
                    alt="computador"
                    ref={deviceContainer}
                    className={
                        previewReady ? version.styleImage : styles.loadingHelper
                    }
                    style={{
                        height: `${mobileHeight}px`,
                        opacity: `${srcTransition}`,
                    }}
                    onLoad={() => setImgLoaded(true)}
                />
            )}
            <iframe
                key={key2}
                src={url}
                title="website"
                ref={page}
                className={
                    previewReady ? version.stylePage : styles.loadingHelper
                }
                style={{
                    transform:
                        pageOption == "mobile" || pageOption == "tablet"
                            ? `scale(${width}) translateX(-50%)`
                            : `scale(${width}`,
                    opacity: `${srcTransition}`,
                }}
                onLoad={() => setFrameLoaded(true)}
            ></iframe>

            <div
                className={
                    previewReady ? version.styleGlass : styles.loadingHelper
                }
                style={{
                    transform:
                        pageOption == "mobile" || pageOption == "tablet"
                            ? `scale(${width}) translateX(-50%)`
                            : `scale(${width}`,
                    opacity: `${srcTransition}`,
                }}
            ></div>
        </div>
    );
}

export default DevicePreview;
