import './App.css';
import ClassList from './components/ClassList';
import { useState } from 'react';

function App() {
  const [classList, setClassList] = useState([
    {
        id: 'AB2',
        roster: [
            {
                name: 'Hans',
            },
            {
                name: 'Tammy',
            },
            {
                name: 'Yuni',
            },
            {
                name: 'Nina',
            },
        ]
    },
    {
        id: 'ED1',
        roster: [
            {
                name: 'Ivan'
            },
            {
                name: 'Fifi'
            },
            {
                name: 'Peter'
            }
        ]
    }
  ]);
  return (
    <div className="App">
      <h1>Welcome, Teacher!</h1>
      <ClassList classList={classList} setClassList={setClassList} />
    </div>
  );
}

export default App;
