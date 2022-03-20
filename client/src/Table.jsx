import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>House</th>
                <th>Patronus</th>
                <th>Wand</th>
                <th>Actor</th>
                <th>Gender</th>
                
            </tr>
            {data.map((item)=>(
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.house}</td>
              <td>{item.patronus}</td>
              <td>{item.wand.core}</td>
              <td>{item.actor}</td>
              <td>{item.gender}</td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table;