"use client"

import { useEffect } from "react";

interface IErrorProps{
    error: Error;
    reset: () => void;
}


export default function Error({error, reset}: IErrorProps){
    useEffect(() =>{
        console.error('Error:', error)
    }, [error])

    return (
        <div>
            <h2>Algo deu errado</h2>
            <button onClick={reset}>
                Tentar novamente
            </button>
        </div>
    )
}