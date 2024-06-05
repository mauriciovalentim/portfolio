import styles from "./Preview.module.css";

import PreviewButtons from "./PreviewButtons";
import DevicePreview from "./DevicePreview";
import { BsInfoSquare } from "react-icons/bs";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        setTimeout(activeInfoMessage, 2000);
    }, [0]);
    const [messageView, setMessageView] = useState(styles.message);
    function activeInfoMessage() {
        setMessageView(styles.messageVisible);
        setTimeout(() => {
            setMessageView(styles.message);
        }, 3000);
    }

    return (
        <div className={styles.preview}>
            <PreviewButtons
                device={device}
                setDevice={setDevice}
                responsiveness={info.responsiveness}
            ></PreviewButtons>
            <DevicePreview device={device} url={info.url}></DevicePreview>
            <BsInfoSquare
                className={styles.infoButton}
                onClick={activeInfoMessage}
            />
            <p className={messageView}>
                O conteúdo dentro das telas é interativo
            </p>
        </div>
    );
}

export default Preview;

/*
1 - Já precisa vir com um conteudo padrão
2 - Preciso que a troca desse conteudo aconteça em device preview e a seleção em preview buttons 


*/
