'use client'
import Link from "next/link"
import styles from "./styles.module.scss"
import { useEffect, useRef } from "react";
import { IPost } from "..";


interface ICardProps {
    post: IPost,
    color: "first" | "second";
}

function formatarData(data: string) {
  const dataObj = new Date(data);
  const dia = dataObj.getDate().toString().padStart(2, '0');
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
  const ano = dataObj.getFullYear();
  return `${dia}-${mes}-${ano}`;
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
          <h6>{formatarData(post.created_at)}</h6>
          <p>{post.description}</p> 
          <Link  href={`/blog/posts/${post.id}`}> Acessar </Link>
        </li>
    ) 
}