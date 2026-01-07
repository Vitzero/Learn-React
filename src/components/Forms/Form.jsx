import styles from './Form.module.css'
import { CampoTexto } from '../CampoTexto/CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import { BotaoForm } from '../Botao/BotaoForm'

export function Form () {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'Design',
        'Mobile'
    ]
    return(
        <section className={styles.formulario}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="digite seu nome.."/>
                <CampoTexto label="Cargo" placeholder="digite seu cargo.."/>
                <CampoTexto label="Imagem" placeholder="Cole o link url da imagem..."/>
                <ListaSuspensa label="Time" itens={times} />
                <BotaoForm>
                    Criar Card
                </BotaoForm>
            </form>
        </section>

    )
}