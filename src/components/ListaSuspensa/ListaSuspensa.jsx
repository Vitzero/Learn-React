import styles from "./ListaSuspensa.module.css";

export function ListaSuspensa(props) {
  return (
    <div className={styles.listaSuspensa}>
      <label>{props.label}</label>
      <select required={props.required} value={props.value} onChange={evento => props.aoAlterado(evento.target.value)}>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
