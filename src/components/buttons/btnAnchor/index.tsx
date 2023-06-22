import Link from "next/link"
import styles from "./styles.module.scss"


interface IBtnGlassmorphism {
    text: string;
    url: string;
}

export default function BtnAnchorGlassmorphism({ text, url }: IBtnGlassmorphism){
    return(
        <li className={styles.container}>
                <Link  href={url}>
                     {text} 
                </Link>
        </li>
    ) 
        
}