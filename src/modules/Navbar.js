import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import UnorderList from 'components/unorderList'

const Navbar = () => {
  const { url } = useRouteMatch()
  const links = [
    { to: `${url}/item/list`, text: 'Listado de productos' },
    { to: `${url}/order/list`, text: 'Listado de ordenes' },
  ].map(({ to, text }) => <Link to={to}>{text}</Link>)

  return (
    <>
      <h3>Menú</h3>
      <UnorderList elements={links} />
    </>
  )
}

export default Navbar
