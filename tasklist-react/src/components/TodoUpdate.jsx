import { FaEdit } from "react-icons/fa";

export const TodoUpdate = () => {
  return (
    <form>
     <input 
         type='text' 
         className='input-update' 
         name='description' 
         value='Leer un libro de Mario Benedetti'
         placeholder='¿Qué hay por hacer?'
         
         />

         <button className='btn-edit' type='submit'>
         <FaEdit />
         </button>
    </form>
  )
}
