import styles from "./BotaoForm.module.css";

export function BotaoForm({texto}) {
  return <button className={styles.botao}>{texto}</button>;
}
