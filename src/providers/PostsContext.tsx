'use client'
import { createContext, useState } from "react";

interface IPost{
	id: number;
	title: string;
	description: string;
    content: string[]; 
	image: string; 
	emphasis: boolean
	adde_to: Date;
	update_to: Date;
}

interface IPostContext{

}

interface IPropsProviders{
    children: React.ReactNode;
}

interface IApiError{
    error: string;
}

export const  PostContext = createContext({} as IPostContext)

export const PostProvider = ({ children }: IPropsProviders ) =>{

    //DESENVOLVER AQUI O CONTEXTO ...


    return(
        <PostContext.Provider value={{

        }}>
            { children }
        </PostContext.Provider>
    )
} 