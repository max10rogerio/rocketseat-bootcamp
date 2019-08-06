import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { ActivityIndicator } from 'react-native'

import { Avatar, Container, List } from '../../components'
import api from '../../services/api'

import { Header, Name, Bio, Starred, Info, Title, Author } from './styles'

const User = ({ navigation }) => {
  const [stars, setStars] = useState([])
  const [loading, setLoading] = useState(false)
  const user = navigation.getParam('user')

  useEffect(() => {
    async function fetch() {
      setLoading(true)
      const response = await api.get(`/users/${user.login}/starred`)

      setStars(response.data)
      setLoading(false)
    }

    fetch()
  }, [])

  return (
    <Container>
      <Header>
        <Avatar size={100} source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      <List
        data={stars}
        keyExtractor={star => String(star.id)}
        renderItem={({ item }) => (
          <Starred>
            <Avatar size={42} source={{ uri: item.owner.avatar_url }} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Starred>
        )}
      />
      {loading && <ActivityIndicator color='#7159c1' size={100} />}
    </Container>
  )
}

User.navigationOptions = {
  title: 'Favoritos',
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
}

export default User
