import React from 'react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

export const LoginForm = () => {
  return (
<form>
<FormControl p='5'>
  <FormLabel>Nombre y apellidos</FormLabel>
  <Input type='text' variant='flushed' mb='5' p='2' bg='gray.50'/>

    <FormLabel>Email</FormLabel>
  <Input type='email' variant='flushed' mb='5' p='2' bg='gray.50'/>
  
  <FormLabel>Nombre de usuario</FormLabel>
  <Input type='text' variant='flushed' mb='5' p='2' bg='gray.50'/>
  
  <FormLabel>Contraseña</FormLabel>
  <Input type='password' variant='flushed' mb='5' p='2' bg='gray.50'/>
  
  <FormLabel>Repetir contraseña</FormLabel>
  <Input type='password' variant='flushed' mb='5' p='2' bg='gray.50'/>
</FormControl>
    </form>
  )
}
