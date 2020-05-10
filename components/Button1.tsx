import styled from '../styles/styled'

const Button = styled('button')`
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 3px;
`

export default Button