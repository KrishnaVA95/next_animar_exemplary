import styles from "./styles.module.scss"

export default function LoadingComponent(){
    return(
        <div className={styles.container}>
            <h2 >
                Carregando...
            </h2>
            <div className={styles.spin}></div>
        </div>
    ) 
        
}