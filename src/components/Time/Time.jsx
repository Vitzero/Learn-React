import { Colaborador } from "../Colaborador/Colaborador";
import styles from "./Time.module.css";

export function Time({time, colaboradores, aoDeletar}) {
  if (!time) return null; // evita erro se time for undefined

  return (
    colaboradores.length > 0 && (
      <section className={styles.time} style={{ backgroundColor: time.corSecundaria }}>
        <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
         {/*IMPOSSIVEL ISSO EXISTIR AINDA <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={time.corSecundaria} type='color' className='input-cor' /> */}
        <div className={styles.colaboradores}>
          {colaboradores.map((colaborador,indice) => (
            <Colaborador
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.corPrimaria}
              imagem={colaborador.imagem}
              aoDeletar={ aoDeletar} 
            />
          ))}
        </div>
      </section>
    )
  );
}
