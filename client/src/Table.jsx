import React from 'react'


const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>House</th>
                <th>Patronus</th>
                <th>Actor</th>
                <th>Gender</th>
                <th>Image</th>
            </tr>
            {data.map((item)=>(
              <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.house}</td>
              <td>{item.patronus}</td>
              <td>{item.actor}</td>
              <td>{item.gender}</td>
              <td><img src={item.image} width="250px" height="250px" alt={item.name}></img></td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table;