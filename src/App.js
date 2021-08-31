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
                points: 0
            },
            {
                name: 'Tammy',
                points: 0
            },
            {
                name: 'Yuni',
                points: 0
            },
            {
                name: 'Nina',
                points: 0
            },
        ]
    },
    {
        id: 'ED1',
        roster: [
            {
                name: 'Ivan',
                points: 0
            },
            {
                name: 'Fifi',
                points: 0
            },
            {
                name: 'Peter',
                points: 0
            }
        ]
    }
  ]);

  const [selectedClass, setSelectedClass] = useState({});

    return (
     <HashRouter basename='/'>
       <Route exact path="/" render={() => <ClassList classList={classList} setClassList={setClassList}
                                            setSelectedClass={setSelectedClass} />} />
       <Route path='/classpage' render={() => <ClassPage selectedClass={selectedClass} setSelectedClass={setSelectedClass}
                                            classList={classList} setClassList={setClassList} />} />
     </HashRouter>
    );
   }

export default App;
