import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { MdShoppingBasket } from 'react-icons/md'

import logo from 'assets/images/logo.svg'

import { Container, Cart } from './styles'

const Header = ({ cartSize }) => {
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

Header.defaultProps = {
  cartSize: 0,
}

Header.propTypes = {
  cartSize: PropTypes.number,
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header)
