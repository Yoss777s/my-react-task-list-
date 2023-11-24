
import './App.css'
import { TodoAdd } from './components/TodoAdd'
import { Todolist } from './components/Todolist'

function App() {
  
  return (
    <>
       <div className="card-to-do">
            <h1>Lista de tareas</h1>
            <div className="counter-todos">
               <h3>N° Tareas: 4</h3>
               <h3>Pendientes: 3</h3>
            </div>

            <div className="add-todo">
              <h3>Agregar tarea</h3>
              <TodoAdd/>
            </div>

      


      <Todolist/>
    </div>
       
       
      
      
    </>
  )
}

export default App
