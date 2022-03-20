import './App.css';
import { Users } from './users';
import React, {useState} from 'react';
import Table from './Table';

function App() {
  const [query, setQuery] = useState("");

  //array para acessar os querys de Users
  const keys = ["name","house","actor"];

  //função para retonar o que procurar no search
  const search = (data) => {
    return data.filter(
      (item) => 
      keys.some((key)=>item[key].toLowerCase().includes(query))
    );
  }

  return (
    <div className="App">
        <input type="text" placeholder="Search..." className="search" onChange={e=>setQuery(e.target.value)}/>
        <Table data={search(Users)} />
    </div>
  );
}

export default App;

{/* <ul className="list">
{Users.filter((user)=>user.name.toLowerCase().includes(query)).map((user)=>(
  <li key={user.id} className="listItem">{user.name}</li>
))}
</ul> */}