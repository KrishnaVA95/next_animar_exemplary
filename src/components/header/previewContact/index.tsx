
import styles from "./styles.module.scss"
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';

export default async function PreviewContact(){

    return(
        <div className={styles.container}>
            <div>
                <FaPhone size={20} style={{
                    color:  "#ffffff",
                    cursor: 'pointer',
                    padding:  '0px',
                }}/>

                <p>(99) 99999-9999</p>
            </div>

            <div>
                <MdEmail  style={{
                    color:  "#ffffff",
                    cursor: 'pointer',
                    padding:  '0px',
                    height: 25,
                    width: 30
                }}/>
                <p>document_company@mail.com</p>
            </div>

        </div>
    ) 
        
}