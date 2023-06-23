import Link from "next/link"
import styles from "./styles.module.scss"



export default async function NavList(){
    
    return(
        <ul className={styles.container}>
                    <li>
                        <Link  href={`/`}> Home</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link  href={`/animar`}> Animar</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link  href={`/blog/posts`}> Blog</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link  href={`/contacts`}> Contato</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link  href={`/shop`}> Loja</Link>
                    </li>
                    <span>|</span>
        </ul>
    )       
}