import { api } from "@/services/api"
import { IPost } from "@/components/showcase"
import SeparatorPage  from "@/components/separator"
import styles from "./styles.module.scss"

interface IPageProps{
    params: {id: string}
}

export default async function PostPage({ params }: IPageProps){
    const response = await api.get<IPost>(`posts/${params.id}`)
    const post =  response.data
    return(
        <div className={styles.container}>
            <SeparatorPage title={post.title}></SeparatorPage>
            <ul>

                {
                    post.content.map(paragraph => <p key={paragraph.slice(0, 15)}>{paragraph}</p>)
                }
            </ul>
        
        </div>
    )
}