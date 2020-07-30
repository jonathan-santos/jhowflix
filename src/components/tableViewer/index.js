import React from 'react'
import Table, { Header, HeaderRow, BodyRow, Data } from './styles'

const TableViewer = ({ data }) => {
  const headers = []
  const rows = []

  Object.entries(data).forEach(([key, value]) => {
    headers.push(key)
    rows.push(value)
  })

  return (
    <Table>
      <thead>
        <HeaderRow>
          {headers.map((header, count) => (
            <Header key={count}>{header}</Header>
          ))}
        </HeaderRow>
      </thead>

      <tbody>
        {rows.map((row, rowCount) => (
          <BodyRow key={rowCount}>
            {row.map((data, dataCount) => (
              <Data key={dataCount}>{data}</Data>
            ))}
          </BodyRow>
        ))}
      </tbody>
    </Table>
  )
}

export default TableViewer
