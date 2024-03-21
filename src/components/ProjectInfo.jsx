import styles from "./ProjectInfo.module.css";
import { IoIosTabletPortrait } from "react-icons/io";
import { GiSmartphone } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import computer from "../assets/computer.png";
import tablet from "../assets/tablet.png";
import mobile from "../assets/mobile.png";
import { useState } from "react";

function ProjectInfo({ info }) {
    const [version, setVersion] = useState({
        image: mobile,
        styleImage: styles.mobile,
        stylePage: styles.webPageMobile,
        styleGlass: styles.glassMobile,
    });

    const versionOptions = {
        computer: function () {
            setVersion({
                image: computer,
                styleImage: styles.computer,
                stylePage: styles.webPageComputer,
                styleGlass: styles.noGlass,
            });
        },
        tablet: function () {
            setVersion({
                image: tablet,
                styleImage: styles.tablet,
                stylePage: styles.webPageTablet,
                styleGlass: styles.noGlass,
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
    return (
        <main className={styles.content}>
            <div></div>
            <div className={styles.project}>
                <div className={styles.monitor}>
                    <div className={styles.help}>
                        <RiComputerLine
                            className={styles.versionButton}
                            onClick={() => {
                                versionOptions["computer"]();
                            }}
                        />
                        <IoIosTabletPortrait
                            className={styles.versionButton}
                            onClick={() => {
                                versionOptions["tablet"]();
                            }}
                        />
                        <GiSmartphone
                            className={styles.versionButton}
                            onClick={() => {
                                versionOptions["mobile"]();
                            }}
                        />
                    </div>

                    <div className={styles.screen}>
                        <img
                            src={version.image}
                            alt=""
                            className={version.styleImage}
                        />
                        <iframe
                            className={version.stylePage}
                            src={info.url}
                        ></iframe>
                        <div className={version.styleGlass}></div>
                    </div>
                </div>
                <div className={styles.information}>
                    <div className={styles.papper}>
                        <h2>Pokedex</h2>
                        <p>Descrição: {info.description}</p>
                        <p>
                            Tecnologias:{" "}
                            {info.techs.map((t, i) =>
                                i < info.techs.length - 1 ? t + ", " : t
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div></div>
        </main>
    );
}
export default ProjectInfo;
