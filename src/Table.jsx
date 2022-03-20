import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>House</th>
                <th>Actor</th>
            </tr>
            {data.map((item)=>(
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.house}</td>
              <td>{item.actor}</td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table;