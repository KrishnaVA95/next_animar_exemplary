import { api } from "@/services/api";
import styles from "./styles.module.scss"
import CardPostGrid from "./CardPostGrid";
import SeparatorPage from "../separator";


export interface IPost {
    id: number;
    title: string;
    description: string;
    content: string[];
    emphasis: boolean;
    image: string;
    created_at: string;
    update_at: string
}

async function getPosts() {
    try {
        const response = await api.get<IPost[]>('/posts')
        return response.data
    } catch (error) {
        console.error(error)
        throw new Error('Failed get itens api')
    }
}

export default async function ShowcaseGrid(){
    const posts = await getPosts()
    return(
        <>
                <SeparatorPage title="Blog Animar"/>
                <ul className={styles.container}>
                    {posts.map((post) =>(
                        <CardPostGrid key={post.id} post={post} color={"first"}/>    
                    ))}
                </ul>
        </>
    ) 
        
}