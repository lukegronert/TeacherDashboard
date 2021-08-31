import './App.css';
import ClassList from './components/ClassList';
import { useState } from 'react';
import { HashRouter, Route } from "react-router-dom";
import ClassPage from './components/ClassPage';

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

  const [selectedClass, setSelectedClass] = useState({});

    return (
     <HashRouter basename='/'>
       <Route exact path="/" render={() => <ClassList classList={classList} setClassList={setClassList} setSelectedClass={setSelectedClass} />} />
       <Route path='/classpage' render={() => <ClassPage selectedClass={selectedClass} />} />
     </HashRouter>
    );
   }

export default App;
