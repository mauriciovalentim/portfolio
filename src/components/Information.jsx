import { useEffect, useRef, useState } from "react";
import InfoNav from "./InfoNav";
import styles from "./Information.module.css";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FiSend } from "react-icons/fi";

export default function Information() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [button, setButton] = useState(false);
    const [stageMessage, setStageMessage] = useState();

    const success = useRef();
    const failure = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
        setButton(false);
        setStageMessage("loading");
        try {
            const response = await fetch("https://api.staticforms.xyz/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    accessKey: "8124005c-3867-4702-b10c-66e5d9e2c941",
                }),
            });
            setName(undefined);
            setEmail(undefined);
            setMessage(undefined);
            if (response.ok) {
                setStageMessage("success");
                success.current.style.opacity = "1";
                setTimeout(() => {
                    success.current.style.opacity = "0";
                    setStageMessage("");
                }, 3000);
            }
        } catch {
            setStageMessage("failure");
            failure.current.style.opacity = "1";
            setTimeout(() => {
                failure.current.style.opacity = "0";
                setStageMessage("");
            }, 3000);
            setName(undefined);
            setEmail(undefined);
            setMessage(undefined);
        }
    };

    useEffect(() => {
        const nameHelper = !(name === undefined || name === "");
        const emailHelper = !(email === undefined || email === "");
        const messageHelper = !(message === undefined || message === "");
        setButton(nameHelper && emailHelper && messageHelper);
    }, [name, message, email]);

    const url = {
        linkedin: "https://www.linkedin.com/in/mauricio-valentim/",
        whatsapp:
            "https://api.whatsapp.com/send/?phone=5581984268982&text&type=phone_number&app_absent=0",
        github: "https://github.com/mauriciovalentim",
    };
    return (
        <div className={styles.information}>
            <InfoNav />
            <div className={styles.socialContainer}>
                <a href={url.linkedin} target="_blank">
                    <FaLinkedin className={styles.social} />
                </a>
                <a href={url.github} target="_blank">
                    <FaGithubSquare className={styles.social} />
                </a>
                <a href={url.whatsapp} target="_blank">
                    <FaWhatsappSquare className={styles.social} />
                </a>
            </div>
            <form onSubmit={handleSubmit} method="post">
                <input
                    type="text"
                    name="name"
                    id={styles.name}
                    placeholder="Nome"
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    id={styles.email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    type="text"
                    name="message"
                    id={styles.message}
                    placeholder="Mensagem"
                    onChange={(e) => setMessage(e.target.value)}
                />

                {/* {stageMessage === "success" && (
                    <p ref={success} className={`${styles.success}`}>
                        <FaCheckCircle />
                        Seu e-mail foi enviado com sucesso
                    </p>
                )} */}
                {/* {stageMessage === "failure" && (
                    <p ref={failure} className={styles.failure}>
                        <IoIosCloseCircle />
                        Tente novamente
                    </p>
                )} */}

                <button
                    type="submit"
                    id={styles.submit}
                    className={button ? styles.ableButton : ""}
                    disabled={!button}
                >
                    <FiSend />
                    Enviar mensagem
                </button>
            </form>
            {stageMessage === "loading" && (
                <AiOutlineLoading className={styles.loading} />
            )}
            <p ref={failure} className={styles.failure}>
                <IoIosCloseCircle />
                Tente novamente!
            </p>
            <p ref={success} className={`${styles.success}`}>
                <FaCheckCircle />
                Enviado com sucesso!
            </p>
        </div>
    );
}
