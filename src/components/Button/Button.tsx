import { Container } from "./style"
interface Element{
  children: string
}

const Button = ({children}: Element) => {
  return (
    <Container>{children}</Container>
  )
}

export default Button