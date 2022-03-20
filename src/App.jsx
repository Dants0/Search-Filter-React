import './App.css';
import { Users } from './users';
import React, {useState} from 'react';
import Table from './Table';

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
        <input type="text" placeholder="Search..." className="search" onChange={e=>setQuery(e.target.value)}/>
        <Table/>
    </div>
  );
}

export default App;

{/* <ul className="list">
{Users.filter((user)=>user.name.toLowerCase().includes(query)).map((user)=>(
  <li key={user.id} className="listItem">{user.name}</li>
))}
</ul> */}