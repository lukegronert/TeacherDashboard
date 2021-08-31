import React from 'react';
import './ClassPage.css';
import { useState, useEffect } from 'react';

export default function ClassPage({selectedClass, setSelectedClass, classList, setClassList}) {
    const [newStudent, setNewStudent] = useState('');

    const toggleStudentModal = () => {
        const studentModal = document.querySelector('.studentModal');
        if(studentModal.style.display !== 'block') {
            studentModal.style.display = 'block';
        } else {
            studentModal.style.display = 'none';
        }
    }

    const addStudent = () => {
        // Set classList to include new student in the selectedClass
        setClassList(
            classList.map((classInfo) => 
            // Find the class with the same id as the selectedClass being displayed on this page
                classInfo.id === selectedClass.id 
                ? {
                    ...classInfo,
                    roster: [
                        // Add the new student to the roster
                        ...classInfo.roster,
                        {
                            name: newStudent,
                            points: 0
                        }
                    ]
                }
                : { ...classInfo }
            )
        );
    };

    useEffect(() => {
        // Whenever classList is updated, update selectedClass for any changes in the roster (when a new student is added)
        setSelectedClass(classList.find((classInfo) => {
            return classInfo.id === selectedClass.id;
        }));
    }, [classList])

    return (
        <div className='container'>
            <h1>{selectedClass.id}</h1>
            <div className='classContent'>
                <div className='roster'>
                    {selectedClass.roster.map((student) => {
                        return (
                            <div key={student.name} className='student'>{student.name}</div>
                        )
                    })}
                    <div className="modal studentModal">
                        <div className="modalContent">
                            <label>Student Name</label>
                            <input type="text" placeholder="" className='studentNameInput'
                                    onChange={(event) => setNewStudent(event.target.value)} />
                        </div>
                            <button onClick={() => addStudent()}>Add</button>
                    </div>
                    <button onClick={() => toggleStudentModal()}>Add Student</button>
                </div>
                <div className='studentContent'>

                </div>
            </div>
        </div>
    )
}
