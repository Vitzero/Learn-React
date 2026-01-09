import styles from "./Footer.module.css";
import facebook from "../assets/fb.png";
import twitter from "../assets/tw.png";
import instagram from "../assets/ig.png";
import organo from "../assets/logo.png";

export function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.container}>
        <div className={styles.ladoEsquerdo}>
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
        </div>

        <div className={styles.centro}>
          <img src={organo} alt="Logo Organo" />
        </div>

        <div className={styles.ladoDireito}>
          <h3>Desenvolvido por Vitor Augusto Baldasso</h3>
        </div>
      </div>
    </footer>
  );
}
