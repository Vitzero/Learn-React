import styles from "./ListaSuspensa.module.css";

export function ListaSuspensa({label, itens, valor, aoAlterado, obrigatorio = false}) {
  return (
    <div className={styles.listaSuspensa}>
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={evento => aoAlterado(evento.target.value)}
      >
      <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
