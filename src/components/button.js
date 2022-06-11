import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ value, disabled = false }) => (
  <Input type="submit" value={value} disabled={disabled} />
)

Button.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

const Input = styled.input`
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

export default Button
