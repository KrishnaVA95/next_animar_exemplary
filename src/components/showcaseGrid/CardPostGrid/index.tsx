'use client'
import Link from "next/link"
import styles from "./styles.module.scss"
import { useEffect, useRef } from "react";
import { IPost } from "..";


interface ICardProps {
    post: IPost,
    color: "first" | "second";
}



export default function CardPostGrid({ post, color }: ICardProps){
    const liElement = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const liCurrent = liElement.current;
    
        if(!liCurrent) {
          return;
        }
    
        const sizeRow = liCurrent.offsetHeight / 10;
      
        const sizeRowFloor = Math.floor(sizeRow);
    
        liCurrent.style.gridRowEnd = `span ${sizeRowFloor}`
    
      }, [])

    return(
        <li ref={liElement} className={styles.container}>
                <h2>{post.title}</h2>
                <p>{post.description}</p> 
                <Link  href={`/blog/posts/${post.id}`}> Acessar </Link>
        </li>
    ) 
}