import { Colaborador } from "../Colaborador/Colaborador";
import styles from "./Time.module.css";

export function Time({time, colaboradores, aoDeletar}) {
  if (!time) return null; // evita erro se time for undefined

  return (
    colaboradores.length > 0 && (
      <section className={styles.time} style={{ backgroundColor: time.corSecundaria }}>
        <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
        <div className={styles.colaboradores}>
          {colaboradores.map((colaborador,indice) => (
            <Colaborador
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.corPrimaria}
              imagem={colaborador.imagem}
              aoDeletar={() => aoDeletar()} 
            />
          ))}
        </div>
      </section>
    )
  );
}
