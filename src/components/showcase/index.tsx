import { api } from "@/services/api";
import CardPost from "./cardPost"
import styles from "./styles.module.scss"
import SeparatorPage from "@/components/separator";

export interface IPost {
    id: number;
    title: string;
    description: string;
    content: string[];
}

async function getPosts() {
    try {
        const response = await api.get<IPost[]>('posts')
        return response.data
    } catch (error) {
        console.error(error)
        throw new Error('Failed get itens api')
    }
}

export default async function Showcase(){
    const posts = await getPosts()
    return(
        <>
                <SeparatorPage title="Blog Animar"/>
                <ul className={styles.container}>
                    {posts.map((post) =>(
                        <CardPost key={post.id} post={post}/>    
                    ))}
                </ul>
        </>
    ) 
        
}