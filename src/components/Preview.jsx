import styles from './Preview.module.css'

import PreviewButtons from "./PreviewButtons";
import DevicePreview from "./DevicePreview";

import { useState } from "react";


function Preview({info}) {
    const [device, setDevice] = useState('computer')
    return (
        <div className={styles.preview}>
            <PreviewButtons device={device} setDevice={setDevice}></PreviewButtons>
            <DevicePreview device={device} url={info.url}></DevicePreview>
        </div>
    );
}

export default Preview;


/*
1 - Já precisa vir com um conteudo padrão
2 - Preciso que a troca desse conteudo aconteça em device preview e a seleção em preview buttons 


*/
