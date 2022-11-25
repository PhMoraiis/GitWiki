import React from "react";
import { InputContainer} from './styles'

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} type="text" placeholder="Digite o nome do usuário e do repositório" />
    </InputContainer>
  )
}

export { Input };