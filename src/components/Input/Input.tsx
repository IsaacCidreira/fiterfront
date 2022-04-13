import { ChangeEventHandler, FocusEventHandler } from 'react'
import { Container } from './style'
import { ReactComponent as PasswordSvg } from '../assets/images/login/cadeado.svg';
import { ReactComponent as EmailSvg } from '../assets/images/login/email.svg';


interface Forms {
  label: string, 
  type: string, 
  name: string, 
  value: string, 
  placeholder?:string,
  onChange: ChangeEventHandler, 
  onBlur:FocusEventHandler
}
const Input = ({ label, type, name, value, placeholder, onChange,  onBlur }: Forms) => {
  
  return (
    <Container>
        {name === "senha" ? <PasswordSvg/> : <></>}
        {name === "login" ? <EmailSvg/>  : <></>}
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
    </Container>
  )
}

export default Input