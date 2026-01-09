import styles from "./BotaoForm.module.css";

export function BotaoForm(props) {
  return <button className={styles.botao}>{props.children}</button>;
}
