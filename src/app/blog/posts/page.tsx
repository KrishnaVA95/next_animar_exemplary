import Showcase from "@/components/showcase";
import styles from "./styles.module.scss"



export default async function PostPage() {


    return (
      <main >
        <div className={styles.container}>
            <Showcase />          
        </div>
      </main>
    )
}