import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss"
import { FieldError, UseFormRegisterReturn } from "react-hook-form";


interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  id: string;
  label: string;
  error?:  string;
  register: UseFormRegisterReturn<string>;
  type: "text" | "password" | "email"
}

export default async function InputSearch<HTMLInputElement>({ label, id , error, register, type}: IInputProps){
    return(
      <>
          <input id='outlined-basic' label={label} type={type} variant="outlined" {...register} />
         {error? <p >{error}</p> : null}
      </>
      //   <fieldset className={styles.container}>
      // </fieldset>
    ) 
}

