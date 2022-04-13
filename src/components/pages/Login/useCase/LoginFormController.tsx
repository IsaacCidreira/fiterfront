import LoginFormUseCase from "./LoginFormUseCase";
import { Container, Forms, Title } from "./style";

function LoginForm() {
  return<Container>
    <Title>Login</Title>
    <Forms>
      <LoginFormUseCase/>
    </Forms>
  </Container>
}

export default LoginForm;
