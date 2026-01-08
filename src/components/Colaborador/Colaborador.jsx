import styles from './Colaborador.module.css'

export function Colaborador(){
    return(
        <div className={styles.colaborador}>
            <div className={styles.cabecalho}>
                <img src='https://github.com/viniciosneves.png' alt='Vitor Augusto' />
            </div>
            
            <div className={styles.rodape}>
                <h4>Vitor Augusto</h4>
                <h5>Desenvolvedor Fullstack</h5>
            </div>
        </div>
    )
}