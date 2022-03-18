import './App.css';
import { Users } from './users';

function App() {
  return (
    <div className="App">
        <input type="text" placeholder="Search..." className="search" />
        <ul className="list">
          {Users.map(users => (
            <li className="listItem">{users.house}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
