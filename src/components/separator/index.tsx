import styles from "./styles.module.scss"
import Image from 'next/image'
// import profilePic  from '../../assets/svg/ornament_line02.svg'
// import profilePic  from '../../assets/svg/teste.svg'
// import profilePic  from '../../assets/svg/Camada-1.svg'


export default async function SeparatorPage({title}: string){

    return(
        <div className={styles.container}>
            <div>
                <h2>{title}</h2>
            </div>
            <span>

            </span>
            {/* <div className={styles.containerImage}>
                <Image
                    src={profilePic}
                    alt="My image"
                    width={50}
                    height={80}
                />
            </div> */}
        </div>
    ) 
        
}