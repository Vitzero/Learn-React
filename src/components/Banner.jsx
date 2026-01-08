import styles from './Banner.module.css'
import bannerzin from '../assets/banner.png'

export function Banner(){
    return(
        <header>
            <header className={styles.header}>
                <img src={bannerzin} alt="Logotipo-Banner" />
            </header>
        </header>
    )
}