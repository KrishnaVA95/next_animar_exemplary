import { api } from "@/services/api"
import SeparatorPage  from "@/components/separator"
import styles from "./styles.module.scss"
import { IProduct } from "@/components/showcase"

interface IPageProps{
    params: {id: string}
}

// export const revalidate = 100;

// export async function generateStaticParams() {
//     const response = await api.get<IPost[]>(`/posts`, {
//         params:{
//             _limit: 5,
//             _page: 1
//         }
//     })
//     return response.data.map(post => ({...post, id: post.id +''}))
// }

export default async function ProductDetail({ params }: IPageProps){
    const response = await api.get<IProduct>(`products/${params.id}/`)
    const product =  response.data
    return(
        <div className={styles.container}>
            <SeparatorPage title={product.name}/>
            <p>{product.description}</p>
        
        </div>
    )
}