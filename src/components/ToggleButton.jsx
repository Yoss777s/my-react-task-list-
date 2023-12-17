import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react'

export default function ToggleButton() {
const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>{
      colorMode === 'light' ? <SunIcon/> : <MoonIcon/>
      }</Button>
  )
}