import styles from "./styles.module.scss"
import ShowcaseGrid from "@/components/showcaseGrid";

export default async function PostPage() {
    return (
      <main >
        <div className={styles.container}>
            <ShowcaseGrid/>
        </div>
      </main>
    )
}