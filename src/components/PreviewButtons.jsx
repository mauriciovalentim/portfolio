import styles from "./PreviewButtons.module.css";
import { useState, useEffect } from "react";
import { IoIosTabletPortrait } from "react-icons/io";
import { GiSmartphone } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";

function PreviewButtons({ device, setDevice }) {
    const [buttons, setButtons] = useState({});

    useEffect(() => {
        buttonsOptions[device]();
    }, []);

    const buttonsOptions = {
        computer: () => {
            setButtons({
                computer: styles.versionButtonSelected,
                tablet: styles.versionButton,
                mobile: styles.versionButton,
            });
        },
        tablet: () => {
            setButtons({
                computer: styles.versionButton,
                tablet: styles.versionButtonSelected,
                mobile: styles.versionButton,
            });
        },
        mobile: () => {
            setButtons({
                computer: styles.versionButton,
                tablet: styles.versionButton,
                mobile: styles.versionButtonSelected,
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
