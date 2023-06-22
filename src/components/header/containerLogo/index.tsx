import Link from "next/link"
import styles from "./styles.module.scss"
import Logo from "../logo"


export default async function ContainerLogo(){
    
    return(

        <Link className={styles.container}  href={`/`}> 
            <Logo/>
        </Link>

    ) 
        
}