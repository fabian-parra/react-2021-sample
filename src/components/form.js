import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = ({ action }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    action(username, password)
  }

  const onChangeValue = set => event => set(event.target.value)

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Identificate en la aplicaci&oacute;n</Title>
      <Input type="text" placeholder="nombre de usuario" value={username} onChange={onChangeValue(setUsername)} />
      <Input type="password" placeholder="contraseña" value={password} onChange={onChangeValue(setPassword)} />
      <Button type="submit" value="Ingresar" />
    </StyledForm>
  )
}

Form.propTypes = {
  action: PropTypes.func.isRequired,
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 25rem;
  background-color: darkgray;
  height: 15rem;
  box-shadow: 0px 0px 5px black;
`
const Title = styled.h1`
  margin-top: 1rem;
  margin-bottom: 2rem;
`
const Input = styled.input`
  margin-bottom: 1rem;
`
const Button = styled.input`
  cursor: pointer;
  padding: .6em 1em;
  transition: background-color .15s;
  font-family: pfbeausans, Arial, 'sans-serif';
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  border-radius: 1rem;
`

export default Form
