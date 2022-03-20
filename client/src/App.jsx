import './App.css';
import React, {useEffect, useState} from 'react';
import Table from './Table';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="App">
        <input type="text" placeholder="Search..." className="search" onChange={e=>setQuery(e.target.value)}/>
        <Table data={data} />
    </div>
  );
}

export default App;
