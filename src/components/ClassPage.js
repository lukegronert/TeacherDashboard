import React from 'react';
import './ClassPage.css';
import { useState, useEffect } from 'react';
import StudentDisplay from './StudentDisplay';

export default function ClassPage({selectedClass, setSelectedClass, classList, setClassList}) {
    const [newStudent, setNewStudent] = useState('');
    const [selectedStudent, setSelectedStudent] = useState({});

    const selectStudent = (studentName) => {
        const students = document.querySelectorAll('.student');
        selectedClass.roster.map((student) => student.name === studentName ? setSelectedStudent(student) : null)
    }
    
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
                            <div key={student.name} className='student' onClick={() => selectStudent(student.name)}>{student.name}</div>
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
                <StudentDisplay selectedStudent={selectedStudent} />
            </div>
        </div>
    )
}
