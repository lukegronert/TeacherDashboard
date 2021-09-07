import 'semantic-ui-css/semantic.min.css';
import ClassList from './components/ClassList';
import { useState, useEffect } from 'react';
import { HashRouter, Route } from "react-router-dom";
import ClassPage from './components/ClassPage';

function App() {
  const [classList, setClassList] = useState(localStorage.getItem('classList') ? JSON.parse(localStorage.getItem('classList')) : [])

  const updateLocalStorage = () => {
      setTimeout(() => localStorage.setItem('classList', JSON.stringify(classList)), 100)
    }

  const [selectedClass, setSelectedClass] = useState({});

    return (
     <HashRouter basename='/'>
       <Route exact path="/" render={() => <ClassList classList={classList} setClassList={setClassList}
                                            setSelectedClass={setSelectedClass} updateLocalStorage={updateLocalStorage} />} />
       <Route path='/classpage' render={() => <ClassPage selectedClass={selectedClass} setSelectedClass={setSelectedClass}
                                            classList={classList} setClassList={setClassList} updateLocalStorage={updateLocalStorage} />} />
     </HashRouter>
    );
   }

export default App;
