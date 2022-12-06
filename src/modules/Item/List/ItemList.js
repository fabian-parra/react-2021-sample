import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useProduct } from 'providers/productProvider'
import { useAuth } from 'providers/authProvider'
import { getProducts } from 'services/product'

const ItemList = () => {
  const {state, searchDispatch} = useProduct()
  const {state: {token}} = useAuth()
  const [uploading, setUploading] = useState(true)
  
  useEffect(() => {
    getProducts({}, token)
      .then(response => searchDispatch('', response))
      .then(() => setUploading(false))
  }, [])

  return (
    <>
      <h2>Item List view</h2>
      <div>
        Componente busqueda
      </div>
      {uploading ? 
        <div>Cargando productos...</div> : 
        <Table>
          <thead>
            <tr>
              <th>Columna A</th>
              <th>Columna B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1</td>
              <td>B1</td>
            </tr>
          </tbody>
        </Table>
      }
    </>
  )
}

const Table = styled.table`
  border-collapse: collapse;

  thead {
    background-color: moccasin;

    tr {
      height: 3rem;
    }
    th {
      width: 10rem;
      border: black solid 1px;
    }
  }

  tbody {
    background-color: lightgoldenrodyellow;

    tr {
      height: 4rem;
    }
    td {
      width: 10rem;
      text-align: center;
      border: black solid 1px;
    }
  }
`

export default ItemList
