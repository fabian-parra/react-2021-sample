import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const UnorderList = ({ elements }) => (
  <List>
    {elements.map((element, index) => <li key={index}>{element}</li>)}
  </List>
)

UnorderList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.node).isRequired,
}

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default UnorderList
