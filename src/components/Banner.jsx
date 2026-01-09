import styles from "./Banner.module.css";
import bannerzin from "../assets/banner1.png";

export function Banner() {
  return (
    <header className={styles.header}>
      <img src={bannerzin} alt="Logotipo-Banner" />
    </header>
  );
}
