import React from 'react';
import { useState } from 'react';
import Class from './Class';
import './ClassList.css';

export default function ClassList({classList, setClassList}) {
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
        <div>
            <div className="ui cards classListContainer">
                {classList.map((classInfo) => {
                    return (
                        <Class key={classInfo.id} classInfo={classInfo} deleteClass={deleteClass} />
                    )
                })}
            </div>
            <button onClick={() => toggleAddClassModal()}>
                Add Class
            </button>
            <div className="ui basic modal">
                <div className="content black">
                    <label>First Name</label>
                    <input type="text" placeholder="Class Title (ex: AB2)" className='classTitleInput'
                            onChange={(event) => setNewClass(event.target.value)} />
                </div>
                    <button className="ui button" onClick={() => addClass()}>Add</button>
            </div>
        </div>
    )
}
