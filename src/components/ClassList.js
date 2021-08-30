import React from 'react';
import { useState } from 'react';
import Class from './Class';
import './ClassList.css';

export default function ClassList() {
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
                    id: newClass
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

    return (
        <div>
            <div className="ui cards classListContainer">
                {classList.map((classInfo) => {
                    return (
                        <Class key={classInfo.id} classInfo={classInfo} />
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
