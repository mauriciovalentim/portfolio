import styles from "./AboutMe.module.css";
import img from "../assets/social/profile.jpg"
export default function AboutMe() {
    return (
        <div className={styles.container}>
            <img
                src={img}
                alt="Imagem de perfil"
            />
            <div className={styles.personalText}>
                <p>
                    Olá, meu nome é Mauricio, mas meus amigos me chamam de
                    Junior. Sou desenvolvedor front-end e atualmente moro em
                    Recife/PE.
                </p>
                <p>
                    No meu tempo livre, gosto de ouvir música, tocar teclado,
                    jogar e desenvolver jogos, além de sempre estar aprendendo
                    algo novo.
                </p>
                <p>
                    Acredito que diferentes formas de conhecimento contribuem
                    para uma vida profissional e pessoal melhor, por isso estou
                    sempre em busca de novas perspectivas.
                </p>
            </div>
        </div>
    );
}
