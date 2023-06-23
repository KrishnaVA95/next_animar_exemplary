
import Link from "next/link"
import styles from "./styles.module.scss"
import { IProduct } from ".."

interface ICardProduct {
    product: IProduct
}

export default function CardProduct({ product }: ICardProduct){
    return(
        <li className={styles.container}>
                <div className={styles.containerImage}>
                </div>
                <h2>{product.name}</h2>

                <div className={styles.containerOpacity}>
                    <p>{product.description}</p> 
                    <span>R${product.value},00</span>
                    
                </div>


                <div className={styles.containerBtns}>
                    <Link  href={`/shop/${product.id}`}> Detail </Link>
                    <button>
                        Add to cart
                    </button>

                </div>
        </li>
    ) 
}