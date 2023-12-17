//import '../Navbar.css'
import { Flex } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import ToggleButton from '../components/ToggleButton'

export const Menu = () => {
  return (
      //<nav className='navbar'>
      <Flex w='100%' bg='pink' p='6' justify='center' gap='20'>
        <NavLink to='/' className='inactive'  activeclassname="active"><h2 className='nav_title'>Home</h2></NavLink>
        <NavLink  to='/sobreNosotros' className='inactive'  activeclassname="active"><h2 className='nav_title'>Sobre Nosotros</h2></NavLink >
        <NavLink  to='/tareas' className='inactive' activeclassname="active"><h2 className='nav_title'>Tareas</h2></NavLink >
        <ToggleButton/>
      </Flex>
  )
}
