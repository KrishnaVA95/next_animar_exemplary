import styles from "./styles.module.scss"
import MenuToggle from "./mobileMenu"
import NavList from "./navList"
import { GiShoppingCart } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';


export default async function NavBar(){
    
    return(
        <nav className={styles.container}>
            <NavList/>
            <GiShoppingCart size={35} style={{
                        color:  "rgb(121, 65, 71)",
                        cursor: 'pointer',
                        margin: "10px"
            }}/>
            <FaUser size={25} style={{
                        color:  "rgb(121, 65, 71)",
                        cursor: 'pointer',
                        margin: "10px"
            }}/>  
            <MenuToggle/>          
        </nav>
    ) 
}