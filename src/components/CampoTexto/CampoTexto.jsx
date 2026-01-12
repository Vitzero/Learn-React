import styles from "./CampoTexto.module.css";

export function CampoTexto({label, placeholder, valor, aoAlterado, obrigatorio = false}) {

  return (
    <div className={styles.CampoTexto}>
      <label>{label}</label>
      <input
        value={valor}
        onChange={evento => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
}
