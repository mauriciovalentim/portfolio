import styles from "./Preview.module.css";

import { useEffect, useRef, useState } from "react";

import PreviewButtons from "./PreviewButtons";
import DevicePreview from "./DevicePreview";

function Preview({ info }) {


    const [device, setDevice] = useState(() => {
        if (info.responsiveness.computer) return "computer";
        if (info.responsiveness.tablet) return "tablet";
        if (info.responsiveness.mobile) return "mobile";
        return ""; // Defina um valor padrão ou manipule de acordo com sua lógica
    });

    useEffect(() => {
        let updatedDevice = "";
        if (info.responsiveness.computer) updatedDevice = "computer";
        else if (info.responsiveness.tablet) updatedDevice = "tablet";
        else if (info.responsiveness.mobile) updatedDevice = "mobile";

        if (updatedDevice && updatedDevice !== device) {
            setDevice(updatedDevice);
        }
    }, [info]);

    return (
        <div className={styles.preview}>
            <PreviewButtons
                device={device}
                setDevice={setDevice}
                responsiveness={info.responsiveness}
            ></PreviewButtons>
            <DevicePreview device={device} url={info.url}></DevicePreview>
            
        </div>
    );
}

export default Preview;
