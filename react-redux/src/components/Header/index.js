import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MdShoppingBasket } from 'react-icons/md'

import logo from 'assets/images/logo.svg'

import { Container, Cart } from './styles'

const Header = () => {
  const cartSize = useSelector(state => state.cart.length)

  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='RocketShoes' />
      </Link>
      <Cart to='/cart'>
        <div>
          <strong>Meu Carrinho</strong>
          <span>
            {cartSize} {cartSize > 1 ? 'itens' : 'item'}
          </span>
        </div>
        <MdShoppingBasket size={36} color='#FFF' />
      </Cart>
    </Container>
  )
}

export default Header
