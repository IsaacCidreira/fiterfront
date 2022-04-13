import React, { FormEvent, useState } from 'react';
import FormGroup from '../../../FormGroup/FormGroup';
import useErrors from '../../../hooks/useErrors';
import Input from '../../../Input/Input';
import { Form } from './style';

const LoginFormUseCase = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {errors,getErrorMessageByFieldName,removeErrors,setErros} = useErrors()
  function validate() {}
  
  function handleLogin({ target }: React.ChangeEvent<HTMLInputElement>) {
    setLogin(target.value);
    if(!target.value){
      setErros({field:"login", message: "Insira um CPF ou E-mail válido."})
    }else{
      removeErrors('login')
    }
  }

  function handlePassword({ target }: React.ChangeEvent<HTMLInputElement>) {
    setPassword(target.value);

    if(!target.value){
      setErros({field:"password", message: "Insira uma senha válida."})
    }else{
      removeErrors('password')
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName("login")}>
        <Input
          label="CPF ou E-mail"
          name="login"
          type="text"
          placeholder="Digite seu CPF ou E-mail aqui"
          value={login}
          onBlur={validate}
          onChange={handleLogin}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("password")}>
        <Input
          label="Senha"
          name="senha"
          type="password"
          placeholder="Digite sua senha aqui"
          value={password}
          onBlur={validate}
          onChange={handlePassword}
        />
      </FormGroup>
    </Form>
  );
};

export default LoginFormUseCase;
