export const TodoAdd = () => {
  return ( 
    <form>
     <input 
         type='text' 
         className='input-add' 
         name='description' 
         value='Leer un libro de Mario Benedetti'
         placeholder='¿Qué hay por hacer?'
         
         />

         <button className='btn-add' type='submit'>
            Agregar
         </button>
    </form>
  );
};
