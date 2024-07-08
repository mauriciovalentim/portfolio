import styles from "./PreviewButtons.module.css";
import { useState, useEffect } from "react";
import { IoIosTabletPortrait } from "react-icons/io";
import { GiSmartphone } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";

function PreviewButtons({
    device,
    setDevice,
    responsiveness,
    deviceContainer,
    setWidth,
}) {
    const [buttons, setButtons] = useState({});
    useEffect(() => {
        buttonsOptions[device]();
    }, [responsiveness, device]);

    const buttonsOptions = {
        computer: () => {
            setButtons({
                computer: responsiveness.computer
                    ? styles.versionButtonSelected
                    : styles.versionButtonUnable,
                tablet: responsiveness.tablet
                    ? styles.versionButton
                    : styles.versionButtonUnable,
                mobile: responsiveness.mobile
                    ? styles.versionButton
                    : styles.versionButtonUnable,
                // computer: styles.versionButtonSelected,
                // tablet: styles.versionButton,
                // mobile: styles.versionButton,
            });
        },
        tablet: () => {
            setButtons({
                computer: responsiveness.computer
                    ? styles.versionButton
                    : styles.versionButtonUnable,
                tablet: responsiveness.tablet
                    ? styles.versionButtonSelected
                    : styles.versionButtonUnable,
                mobile: responsiveness.mobile
                    ? styles.versionButton
                    : styles.versionButtonUnable,
            });
        },
        mobile: () => {
            setButtons({
                computer: responsiveness.computer
                    ? styles.versionButton
                    : styles.versionButtonUnable,
                tablet: responsiveness.tablet
                    ? styles.versionButton
                    : styles.versionButtonUnable,
                mobile: responsiveness.mobile
                    ? styles.versionButtonSelected
                    : styles.versionButtonUnable,
            });
        },
    };

    function handleButton(device) {
        buttonsOptions[device]();
        setDevice(device);
    }

    return (
        <div className={styles.buttonsContainer}>
            <RiComputerLine
                className={buttons.computer}
                onClick={() => {
                    handleButton("computer");
                }}
            />
            <IoIosTabletPortrait
                className={buttons.tablet}
                onClick={() => {
                    handleButton("tablet");
                }}
            />
            <GiSmartphone
                className={buttons.mobile}
                onClick={() => {
                    handleButton("mobile");
                }}
            />
        </div>
    );
}

export default PreviewButtons;
