import styles from "./styles.module.scss"
import PreviewContact from "./previewContact"
import Logo from "./logo"

export default async function Header(){

    return(
        <div className={styles.container}>
            <PreviewContact/>
            <Logo/>
            <div></div>
        </div>
    ) 
        
}