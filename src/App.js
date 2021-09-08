import 'semantic-ui-css/semantic.min.css';
import ClassList from './components/ClassList';
import { useState, useEffect } from 'react';
import { HashRouter, Route } from "react-router-dom";
import ClassPage from './components/ClassPage';

function App() {
  const [classList, setClassList] = useState(localStorage.getItem('classList') ? JSON.parse(localStorage.getItem('classList')) : [])

  const updateClassListLocalStorage = () => {
      setTimeout(() => localStorage.setItem('classList', JSON.stringify(classList)), 100)
    }

  const [selectedClass, setSelectedClass] = useState(localStorage.getItem('selectedClass') ? JSON.parse(localStorage.getItem('selectedClass')) : {});

  // Sets the selectedClass value in local storage to equal to updated version of the selectedClass
  const updateSelectedClassLocalStorage = (classId) => {
    setTimeout(() => localStorage.setItem('selectedClass', JSON.stringify(classId)), 100)
    localStorage.setItem('selectedClass', JSON.stringify(classId))
  }

    return (
     <HashRouter basename='/'>
       <Route exact path="/" render={() => <ClassList classList={classList} setClassList={setClassList}
                                            setSelectedClass={setSelectedClass} updateClassListLocalStorage={updateClassListLocalStorage}
                                            updateSelectedClassLocalStorage={updateSelectedClassLocalStorage} />} />
       <Route path='/classpage' render={() => <ClassPage selectedClass={selectedClass} setSelectedClass={setSelectedClass}
                                            classList={classList} setClassList={setClassList} updateClassListLocalStorage={updateClassListLocalStorage}
                                            updateSelectedClassLocalStorage={updateSelectedClassLocalStorage} />} />
     </HashRouter>
    );
   }

export default App;
