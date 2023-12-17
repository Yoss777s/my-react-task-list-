import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Tareas from './pages/Tareas';
import Error from './pages/Error';
import { Menu } from './pages/Menu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
	<BrowserRouter>
         
		<Menu/>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/sobreNosotros' element={<SobreNosotros/>}></Route>
            <Route path='/tareas' element={<Tareas/>}></Route> 
            <Route path='*' element={<Error/>}></Route>
         </Routes>
		
     </BrowserRouter>
		</>
	);
}

export default App;

