import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'

import { updateProfileRequest } from 'store/modules/user/actions'

import { signOut } from 'store/modules/auth/actions'
import AvatarInput from './AvatarInput'
import { Container } from './styles'

function Profile() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  function handleSumbit(data) {
    dispatch(updateProfileRequest(data))
  }

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSumbit}>
        <AvatarInput name='avatar_id' />
        <Input name='name' placeholder='Nome Completo' />
        <Input name='email' type='email' placeholder='Email' />
        <hr />
        <Input type='password' name='oldPassword' placeholder='Senha atual' />
        <Input type='password' name='password' placeholder='Nova Senha' />
        <Input
          type='password'
          name='confirmPassword'
          placeholder='Confirmação de Senha'
        />
        <button type='submit'>Atualizar perfil</button>
      </Form>
      <button type='button' onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  )
}

export default Profile
