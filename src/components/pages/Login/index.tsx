import Head from "../../helper/Head"
import { Container, LoginContainer } from "./style"
import LoginForm from "./useCase/LoginFormController"
import logo from "../../../components/assets/images/logofiterimg.png"

const Login = () => {
  return (
    <LoginContainer>
      <img src={logo} alt="Logo da fiter" />
      <Container>
          <Head title="Login"/>
          <LoginForm/>
      </Container>
    </LoginContainer>
  )
}

export default Login