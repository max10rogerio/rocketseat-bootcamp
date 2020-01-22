import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Avatar = styled.Image`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => (props.rounded ? `${props.size / 2}px` : '0')};
  background: #eee;
`
Avatar.defaultProps = {
  size: 100,
  rounded: true,
}

Avatar.propTypes = {
  size: PropTypes.number,
  rounded: PropTypes.bool,
}

export default Avatar
