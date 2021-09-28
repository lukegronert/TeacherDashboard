import React from 'react';
import { useState, useEffect } from 'react';
import ClassCard from './ClassCard';
import './ClassList.css';
import { Button } from 'semantic-ui-react';

export default function ClassList({classList, setClassList, selectedClass, setSelectedClass, updateClassListLocalStorage, updateSelectedClassLocalStorage}) {
    const [newClass, setNewClass] = useState('')

    const toggleAddClassModal = () => {
        //Create modal with form to enter class information
        const addClassModal = document.querySelector('.classModal');
        if (addClassModal.style.display !== "block") {
            addClassModal.style.display = "block";
          } else {
            addClassModal.style.display = "none";
          }
    }

    const addClass = () => {
        //add class to classList
        if(newClass !== '') {
            setClassList([
                ...classList,
                {
                    id: newClass,
                    roster: []
                }
            ])
            // clear input value
            const classTitleInput = document.querySelector('.classTitleInput');
            classTitleInput.value = '';
            // hide addClassModal
            toggleAddClassModal();
            // Change newClass to an empty string
            setNewClass('');
        } else {
            return
        }
    }

    const deleteClass = (id) => {
        // create new array without the class that user wants to delete
        const newClassList = classList.filter((classInfo) => classInfo.id !== id);
        // set the new array without the deleted array as the classList
        setClassList(newClassList);
    }

    useEffect(() => {
        updateClassListLocalStorage()
    }, [classList])

    if(classList.length !== null) {
        return (
            <div className="mainContent">
            <h1>Welcome, Teacher!</h1>
                <div className="ui cards classListContainer">
                    {classList.map((classInfo) => {
                        return (
                            <ClassCard key={classInfo.id} classInfo={classInfo} deleteClass={deleteClass} 
                            setSelectedClass={setSelectedClass} updateSelectedClassLocalStorage={updateSelectedClassLocalStorage} />
                        )
                    })}
                </div>
                <div className='addClassButton'>
                    <Button onClick={() => toggleAddClassModal()} basic content='Add Class' color='black' />
                </div>
                <div className="modal classModal">
                    <div className="modalContent">
                        <label>Class Title</label>
                        <input type="text" placeholder="(ex: AB2)" className='classTitleInput'
                                onChange={(event) => setNewClass(event.target.value)} />
                    </div>
                        <Button onClick={() => addClass()} basic content='Add' color='blue' />
                </div>
            </div>
        );
    } else {
        return (
            <div className="mainContent">
                <h1>Welcome, Teacher!</h1>
                <div className='addClassButton'>
                    <Button onClick={() => toggleAddClassModal()} basic content='Add Class' color='black' />
                </div>
                <div className="modal classModal">
                    <div className="modalContent">
                        <label>Class Title</label>
                        <input type="text" placeholder="(ex: AB2)" className='classTitleInput'
                                onChange={(event) => setNewClass(event.target.value)} />
                    </div>
                        <Button onClick={() => addClass()} basic content='Add' color='blue' />
                </div>
            </div>
        )
    }
}
