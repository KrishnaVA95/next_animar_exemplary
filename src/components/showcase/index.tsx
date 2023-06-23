import { api } from "@/services/api";
import CardProduct from "./cardProduct"
import styles from "./styles.module.scss"
import SeparatorPage from "@/components/separator";

export interface IProduct {
    id: number;
    name: string;
    value: number;
    description: string;
    image: string;
    emphasis: boolean;
    created_at: string;
    update_at: string;
}

async function getProducts() {
    try {
        const response = await api.get<[IProduct]>('/products')
        return response.data
    } catch (error) {
        console.error(error)
        throw new Error('Failed get itens api')
    }
}

export default async function ShowcaseFlex(){
    const products = await getProducts()
    return(
        <>
                <SeparatorPage title="Loja Animar"/>
                <ul className={styles.container}>
                    {products.map((product) =>(
                        <CardProduct key={product.id} product={product}/>    
                    ))}
                </ul>
        </>
    ) 
        
}