import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'

import api from 'services/api'
import { formatPrice } from 'utils/format'
import * as CartActions from 'store/modules/cart/actions'

import { ProductList } from './styles'

const Home = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount
      return sumAmount
    }, {})
  )

  const addToCart = id => {
    dispatch(CartActions.addToCartRequest(id))
  }

  useEffect(() => {
    const fetch = async () => {
      const response = await api.get('products')
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))

      setProducts(data)
    }

    fetch()
  }, [])

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type='button' onClick={() => addToCart(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color='#fff' />{' '}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

export default Home
