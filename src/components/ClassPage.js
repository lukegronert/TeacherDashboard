import React from 'react';
import './ClassPage.css';
import { useState, useEffect } from 'react';
import StudentDisplay from './StudentDisplay';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

/* eslint-disable */
//Disabled eslint because no-unused-expressions was not letting my program run
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

    const displayMobileStudentDisplay = (student) => {
        const studentDisplay = document.querySelector('.studentDisplay');
        const roster = document.querySelector('.roster');
        if(window.screen.width < 601) {
            studentDisplay.style.display= 'block';
            roster.style.display = 'none';
        }
        setSelectedStudent(student)
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
                        ...selectedClass,
                        roster: [
                            // Add the new student to the roster
                            ...selectedClass.roster,
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

    const deleteStudent = (studentName) => {
        // create new array without the class that user wants to delete
        const newClassRoster = selectedClass.roster.filter((student) => student.name !== studentName);
        // set the new array without the deleted array as the classList
        setSelectedClass({
            ...selectedClass,
            roster: [
                ...newClassRoster
            ]
        })
        setClassList(
            classList.map((classInfo) => 
            // Find the class with the same id as the selectedClass being displayed on this page
                classInfo.id === selectedClass.id 
                ? {
                    ...selectedClass,
                    roster: [
                        ...newClassRoster
                    ]
                }
                : { ...classInfo }
            )
        )
        setTimeout(() => {
            setSelectedStudent({})
        }, 100)
    }

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
                    <span className='homeIcon'>
                        <Link to="/">
                            <Button icon>
                                <Icon name='home' />
                            </Button>
                        </Link>
                    </span>
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
                            <Button onClick={() => addStudent()} basic color='blue' content='Submit' />
                        </div>
                        <Button onClick={() => toggleStudentModal()} basic color='standard' content='Add' />
                    </div>
                    <StudentDisplay selectedStudent={selectedStudent} roster={selectedClass.roster}
                                    classList={classList} setClassList={setClassList} updateClassListLocalStorage={updateClassListLocalStorage}
                                    deleteStudent={deleteStudent} />
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <nav>
                <span className='homeIcon'>
                    <Link to="/">
                        <Button icon>
                            <Icon name='home' />
                        </Button>
                    </Link>
                </span>
            </nav>
            <h1>{selectedClass.id}</h1>
            <div className='classContent'>
                <div className='roster'>
                    <div className='student' onClick={() => displayMobileStudentDisplay(selectedClass.roster)}>All</div>
                        {selectedClass.roster.map((student) => {
                            return (
                                <div>
                                    <div key={student.name} className='student' onClick={() => displayMobileStudentDisplay(student)}>
                                        {student.name}
                                    </div>
                                </div>
                            )
                        })}
                        <Button onClick={() => toggleStudentModal()} basic color='standard' content='Add' className='addStudentButton' />
                        <div className="modal studentModal">
                            <div className="modalContent">
                                <label>Student Name</label>
                                <input type="text" placeholder="" className='studentNameInput'
                                        onChange={(event) => setNewStudent(event.target.value)} />
                            </div>
                            <Button onClick={() => addStudent()} basic color='blue' content='Submit' />
                        </div>
                </div>
                <StudentDisplay selectedStudent={selectedStudent} roster={selectedClass.roster}
                                classList={classList} setClassList={setClassList} updateClassListLocalStorage={updateClassListLocalStorage}
                                deleteStudent={deleteStudent} />
            </div>
        </div>
    )
}
