# Login

**RF**
Deve ser capaz de logar um usuário.
Caso o pulso não tenha sido medido, deve ser capaz de ir para a tela de pulso.
Caso o pulso já tenha sido medido, deve ser capaz de ir para linha do tempo.

**RN**
Não deve ser possível de logar sem e-mail ou cpf.
Não deve ser possível de logar sem senha.
Botão de entrar só deverá ficar habilitado quando e-mail ou cpf e senha forem preenchidos.
Não deve ser possível de entrar com e-mail ou cpf com formatação errada.
Não deve ser possível entrar com e-mail ou cpf não cadastrado.
Não deve ser capaz de ir para tela de pulso caso já tenha sido medido.

user{
token
id
pulse [
pulsoFelicidade
pulsoCultural
atributos[
felicidade[
pessoa,
clima,
orgulho,
meuTrabalho
],
cultura[
cliente,
orientacao,
desafio,
pessoasColaboracao
]
]
history[
felicidade[
jan,
fev
mar,
...
],
cultural[
jan,
fev,
mar
]
]
]
details[
nome,
email,
cpf,
empresa,
data-nascimento,
cargo,
role,
logoEmpresa

]
}
