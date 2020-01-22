import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export default styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`
