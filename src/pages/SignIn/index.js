import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import { signInRequest } from 'store/modules/auth/actions'
import logo from 'assets/images/logo.svg'

import schemaValidator from './schemaValidator'

function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <>
      <img src={logo} alt='GoBarber' />
      <Form onSubmit={handleSubmit} schema={schemaValidator}>
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Senha' />
        <button type='submit'>{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to='/register'>Criar conta</Link>
      </Form>
    </>
  )
}

export default SignIn
