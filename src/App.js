import 'semantic-ui-css/semantic.min.css';
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
                points: 545,
                classId: 'AB2'
            },
            {
                name: 'Tammy',
                points: 233,
                classId: 'AB2'
            },
            {
                name: 'Yuni',
                points: 94,
                classId: 'AB2'
            },
            {
                name: 'Nina',
                points: 333,
                classId: 'AB2'
            },
        ]
    },
    {
        id: 'ED1',
        roster: [
            {
                name: 'Ivan',
                points: 784,
                classId: 'ED1'
            },
            {
                name: 'Fifi',
                points: 3,
                classId: 'ED1'
            },
            {
                name: 'Peter',
                points: 777,
                classId: 'ED1'
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
