import styles from "./styles.module.scss"

interface ISeparatorPage {
    title: string;
}

export default async function SeparatorPage({title}: ISeparatorPage){

    return(
        <div className={styles.container}>
            <div>
                <h2>{title}</h2>
            </div>
            <span></span>
        </div>
    ) 
}