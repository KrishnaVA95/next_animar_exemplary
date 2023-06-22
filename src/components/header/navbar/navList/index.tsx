import Link from "next/link"
import styles from "./styles.module.scss"



export default async function NavList(){
    
    return(
        <ul className={styles.container}>
                    <li>
                        <Link  href={`/blog/posts`}> Home</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link  href={`/blog/posts`}> Animar</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link  href={`/blog/posts`}> Blog</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link  href={`/blog/posts`}> Contato</Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link  href={`/blog/posts`}> Loja</Link>
                    </li>
                    <span>|</span>
        </ul>
    ) 
        
}