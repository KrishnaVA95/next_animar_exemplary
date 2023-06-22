import { api } from "@/services/api"
import { IPost } from "@/components/showcase"
import SeparatorPage  from "@/components/separator"
import styles from "./styles.module.scss"
import Image from 'next/image'
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

export default async function PostPage({ params }: IPageProps){
    const response = await api.get<IPost>(`posts/${params.id}/`)
    const post =  response.data
    return(
        <div className={styles.container}>
            <SeparatorPage title={post.title}/>
            {/* <Image
                src={post.image}
                alt='image do mercado'
            /> */}
            <ul>

                {
                    post.content.map(paragraph => <p key={paragraph.slice(0, 15)}>{paragraph}</p>)
                }
            </ul>
        
        </div>
    )
}