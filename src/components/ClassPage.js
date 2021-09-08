import React from 'react';
import './ClassPage.css';
import { useState, useEffect } from 'react';
import StudentDisplay from './StudentDisplay';
import { Link } from 'react-router-dom';

export default function ClassPage({selectedClass, setSelectedClass, classList, setClassList, updateClassListLocalStorage}) {
    const [newStudent, setNewStudent] = useState('');
    const [selectedStudent, setSelectedStudent] = useState({});
    
    const toggleStudentModal = () => {
        const studentModal = document.querySelector('.studentModal');
        if(studentModal.style.display !== 'block') {
            studentModal.style.display = 'block';
        } else {
            studentModal.style.display = 'none';
        }
    }

    const addStudent = () => {
        const studentNameInput = document.querySelector('.studentNameInput');
        // only add student if input is not blank
        if(studentNameInput.value !== '') {
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
                                points: 0,
                                level: 0,
                                classId: selectedClass.id
                            }
                        ]
                    }
                    : { ...classInfo }
                )
            );
            // Set input text to blank
            studentNameInput.value = '';
            setNewStudent('');
            updateClassListLocalStorage()
        }
    };

    useEffect(() => {
        // Whenever classList is updated, update selectedClass for any changes in the roster (when a new student is added)
        updateClassListLocalStorage()
        //resets the selectedClass to the updated selectedClass. This runs when the user adds a new student.
        setSelectedClass(classList.find((classInfo) => {
            return classInfo.id === selectedClass.id;
        }));
    }, [classList])

    if(selectedClass.roster.length === 0) {
        return (
            <div className='container'>
                <nav>
                    <span><Link to="/">Home</Link></span>
                </nav>
                <h1>{selectedClass.id}</h1>
                <div className='classContent'>
                    <div className='roster'>
                    <div className='student' onClick={() => setSelectedStudent(selectedClass.roster)}>All</div>
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
                    <StudentDisplay selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} roster={selectedClass.roster}
                                    classList={classList} setClassList={setClassList} selectedClass={selectedClass} updateClassListLocalStorage={updateClassListLocalStorage} />
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <nav>
                <span><Link to="/">Home</Link></span>
            </nav>
            <h1>{selectedClass.id}</h1>
            <div className='classContent'>
                <div className='roster'>
                <div className='student' onClick={() => setSelectedStudent(selectedClass.roster)}>All</div>
                    {selectedClass.roster.map((student) => {
                        return (
                            <div key={student.name} className='student' onClick={() => setSelectedStudent(student)}>{student.name}</div>
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
                <StudentDisplay selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} roster={selectedClass.roster}
                                classList={classList} setClassList={setClassList} selectedClass={selectedClass} updateClassListLocalStorage={updateClassListLocalStorage} />
            </div>
        </div>
    )
}
