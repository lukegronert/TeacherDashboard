import React from 'react';
import { useState } from 'react';
import Class from './Class';

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

    const toggleClassModal = () => {
        //Create modal with form to enter class information
        const addClassModal = document.querySelector('.modal');
        if (addClassModal.style.display !== "block") {
            addClassModal.style.display = "block";
          } else {
            addClassModal.style.display = "none";
          }
    }

    const addClass = () => {
        setClassList([
            ...classList,
            {
                id: newClass
            }
        ])
        const classTitleInput = document.querySelector('.classTitleInput');
        classTitleInput.value = '';
        toggleClassModal();
        setNewClass('');
    }

    return (
        <div>
            {classList.map((classInfo) => {
                return (
                    <Class key={classInfo.id} classInfo={classInfo} />
                )
            })}
            <button onClick={() => toggleClassModal()}>
                Add Class
            </button>
            <div className="ui basic modal">
                <div className="content">
                    <label>First Name</label>
                    <input type="text" placeholder="Class Title (ex: AB2)" className='classTitleInput'
                            onChange={(event) => setNewClass(event.target.value)} />
                    </div>
                    <button className="ui button" onClick={() => addClass()}>Add</button>
                </div>
        </div>
    )
}
