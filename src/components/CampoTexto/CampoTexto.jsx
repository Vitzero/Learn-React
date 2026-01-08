import  styles  from './CampoTexto.module.css'

export function CampoTexto(props) {



  function aoDigitado(evento){
    props.aoAlterado(evento.target.value)
    //setValor(evento.target.value)

  }

  return (
    
    <div className={styles.CampoTexto}>
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>

  );

};