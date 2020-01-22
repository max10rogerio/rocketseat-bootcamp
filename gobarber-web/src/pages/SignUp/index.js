import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import logo from 'assets/images/logo.svg'
import { signUpRequest } from 'store/modules/auth/actions'

import schemaValidator from './schemaValidator'

function SignUp() {
  const dispatch = useDispatch()
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password))
  }

  return (
    <>
      <img src={logo} alt='GoBarber' />
      <Form schema={schemaValidator} onSubmit={handleSubmit}>
        <Input name='name' placeholder='Nome completo' />
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Senha' />
        <button type='submit'>Criar conta</button>
        <Link to='/'>Fazer login</Link>
      </Form>
    </>
  )
}

export default SignUp
