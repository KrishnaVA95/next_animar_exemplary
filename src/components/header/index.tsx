import styles from "./styles.module.scss"
import PreviewContact from "./previewContact"
import NavBar from "./navbar"
import ContainerLogo from "./containerLogo"


export default async function Header(){

    return(
        <div className={styles.container}>
            <PreviewContact/>
            <ContainerLogo/>
            <NavBar/>

            <div></div>
        </div>
    ) 
        
}