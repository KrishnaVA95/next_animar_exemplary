'use client'
import {useForm, SubmitHandler} from 'react-hook-form'
import InputSearch from '../inputSearch';
import styles from "./styles.module.scss"
export interface ISearch {
  text: string;
}

const SearchForm = () => {
  const { register, handleSubmit, reset, formState: { errors }  } = useForm<ISearch>()


  const submit: SubmitHandler<ISearch> = (data) =>{
    console.log(data)
    reset()
  }

  return(
    <form className={styles.container} onSubmit={handleSubmit(submit)}>
      <InputSearch 
        id='outlined-basic'
        label='Pequise seu produto'
        type='text'
        register={register('text')}
        error={errors.text?.message}
      />
    
      <button type="submit" >Enviar</button>

    </form>

  )
}


export default SearchForm;