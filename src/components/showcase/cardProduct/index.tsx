
import Link from "next/link"
import styles from "./styles.module.scss"
import { IProduct } from ".."

interface ICardProduct {
    product: IProduct
}

export default function CardProduct({ product }: ICardProduct){
    return(
        <li className={styles.container}>
                <div>
                    <h2>{product.name}</h2>
                </div>
                <p>{product.description}</p> 
                <Link  href={`/shop/${product.id}`}> Detail </Link>
        </li>
    ) 
}