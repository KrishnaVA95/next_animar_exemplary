import styles from "./styles.module.scss"


export default async function MenuToggle(){

    return(
            <nav className={styles.container}>
                <ul>
                    <li>Home</li>
                    <li>Animar</li>
                    <li>Blog</li>
                    <li>Contato</li>
                    <li>Loja</li>
                </ul>
            </nav>
    ) 
        
}