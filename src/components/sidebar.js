import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true)
  const arrows = [...Array(3)].map((elem, index) => <Arrow key={index} direction={open ? 'left' : 'rigth'} />)

  const toggle = event => {
    event.preventDefault()
    setOpen(!open)
  }

  return (
    <SidebarContainer open={open}>
      <ToggleSidebar open={open} onClick={toggle}>
        {arrows}
      </ToggleSidebar>
      { open ? children : null }
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node,
}

const SidebarContainer = styled.div`
  width: ${({ open }) => open ? '10rem' : '2rem'};
  max-width: 10rem;
  transition: width .5s ease;
  padding: 1rem;
  border-right: black solid 1px;
  background-color: lightslategray;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ToggleSidebar = styled.i`
  cursor: pointer;
  align-self: ${({ open }) => open ? 'end' : 'center'};
  width: max-content;
`

const ARROW_ROTATE = {
  left: 135,
  rigth: -45,
  up: -135,
  down: 45,
}
const Arrow = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(${props => ARROW_ROTATE[props.direction]}deg);
`

export default Sidebar
