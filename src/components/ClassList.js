import React from 'react';
import { useState } from 'react';
import ClassCard from './ClassCard';
import './ClassList.css';

export default function ClassList({classList, setClassList, selectedClass, setSelectedClass}) {
    const [newClass, setNewClass] = useState('')

    const toggleAddClassModal = () => {
        //Create modal with form to enter class information
        const addClassModal = document.querySelector('.modal');
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
        const newClassList = classList.filter((classInfo) => classInfo.id !== id);
        setClassList(newClassList);
    }

    return (
        <div className="mainContent">
        <h1>Welcome, Teacher!</h1>
            <div className="ui cards classListContainer">
                {classList.map((classInfo) => {
                    return (
                        <ClassCard key={classInfo.id} classInfo={classInfo} deleteClass={deleteClass} 
                        selectedClass={selectedClass} setSelectedClass={setSelectedClass} />
                    )
                })}
            </div>
            <button className='addClassButton' onClick={() => toggleAddClassModal()}>
                Add Class
            </button>
            <div className="modal">
                <div className="modalContent">
                    <label>Class Title</label>
                    <input type="text" placeholder="(ex: AB2)" className='classTitleInput'
                            onChange={(event) => setNewClass(event.target.value)} />
                </div>
                    <button onClick={() => addClass()}>Add</button>
            </div>
        </div>
    )
}
