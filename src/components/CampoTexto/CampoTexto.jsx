import  styles  from './CampoTexto.module.css'

export function CampoTexto(props) {

  return (
    
    <div className={styles.CampoTexto}>
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>

  );

};