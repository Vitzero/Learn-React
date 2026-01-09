import styles from "./Form.module.css";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import { BotaoForm } from "../Botao/BotaoForm";
import { useState } from "react";

export function Form(props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  function aoSalvar(evento) {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  }

  return (
    <section className={styles.formulario}>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto
          obrigatorio={true}
          valor={nome}
          label="Nome"
          aoAlterado={(valor) => setNome(valor)}
          placeholder="digite seu nome.."
        />

        <CampoTexto
          obrigatorio={true}
          valor={cargo}
          label="Cargo"
          aoAlterado={(valor) => setCargo(valor)}
          placeholder="digite seu cargo.."
        />

        <CampoTexto
          obrigatorio={true}
          valor={imagem}
          label="Imagem"
          aoAlterado={(valor) => setImagem(valor)}
          placeholder="Cole o link url da imagem..."
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />

        <BotaoForm>Criar Card</BotaoForm>
      </form>
    </section>
  );
}
