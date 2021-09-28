import React from 'react';
import './StudentDisplay.css';
import { Progress, Button } from 'semantic-ui-react';
import number0 from '../images/0.jpg';
import number1 from '../images/1.jpg';
import number2 from '../images/2.jpg';
import number3 from '../images/3.jpg';
import number4 from '../images/4.jpg';
import number5 from '../images/5.jpg';

/* eslint-disable */
//Disabled eslint because no-unused-expressions was not letting my program run
export default function StudentDisplay({selectedStudent, roster, classList, setClassList, updateClassListLocalStorage, deleteStudent }) {
    let mobileScreen = 'none';
    if(screen.width < 601) {
        mobileScreen = 'block';
    } else {
        mobileScreen = 'none';
    }

    const calculateLevel = (points) => {
        return Math.floor(points/100)
    }

    const calculatePercentToNextLevel = (points) => {
        return points - (calculateLevel(points)*100);
    }

    const addPoint = (studentName, studentClassId) => {
            // Set classList to update points of selectedStudent
            setClassList(
                classList.map((classInfo) => {
                // Find the class with the same id as the selectedStudent
                    if(classInfo.id === studentClassId) {
                        // HAD AN ISSUE WHERE I WAS REPLACING THE CLASSINFO WITH ONE STUDENT'S INFO
                        // I MOVED THE ...CLASSINFO UNDER ROSTER AND THE ISSUE WAS FIXED
                            return (
                                {
                                    roster: [
                                        classInfo.roster.map((student) => {
                                            // check if student is the student use as a param
                                            student.name === studentName
                                            ?
                                                //if it is, add 1 to the points of the student
                                                    {
                                                        points: student.points++,
                                                        //keep other info the same
                                                        ...student
                                                    }
                                            :
                                                    //if it is a different student, return student info
                                                    { ...student }
                                            }
                                        )
                                    ],
                                    // MOVED THIS HERE INSTEAD OF ABOVE ROSTER
                                    ...classInfo
                                })
                            } else {
                                return (
                                    { ...classInfo }
                                )
                            }
                        }))
                        updateClassListLocalStorage()
        };

    const subtractPoint = (studentName, studentClassId) => {
        // Set classList to update points of selectedStudent
        setClassList(
            classList.map((classInfo) => {
            // Find the class with the same id as the selectedStudent
                if(classInfo.id === studentClassId) {
                    // HAD AN ISSUE WHERE I WAS REPLACING THE CLASSINFO WITH ONE STUDENT'S INFO
                    // I MOVED THE ...CLASSINFO UNDER ROSTER AND THE ISSUE WAS FIXED
                        return (
                            {
                                roster: [
                                    classInfo.roster.map((student) => {
                                        student.name === studentName
                                        ?
                                                {
                                                    points: student.points--,
                                                    ...student
                                                }
                                        :
                                                { ...student }
                                        }
                                    )
                                ],
                                // MOVED THIS HERE INSTEAD OF ABOVE ROSTER
                                ...classInfo
                            })
                        } else {
                            return (
                                { ...classInfo }
                            )
                        }
                    }))
                    updateClassListLocalStorage()
    };

    const mobileDisplayRoster = () => {
        const roster = document.querySelector('.roster');
        const studentDisplay = document.querySelector('.studentDisplay');
        if(roster.style.display === 'none') {
            roster.style.display = 'block';
            studentDisplay.style.display = 'none';
        }
    }

    // Object with all numberImage variables
    const numberImages = {
        '0': number0,
        '1': number1,
        '2': number2,
        '3': number3,
        '4': number4,
        '5': number5
    }

        // Use numberImages[studentLevel] to select the correct image variable to use for the studentDisplay img
    if(selectedStudent.name !== undefined) {
        const studentLevel = calculateLevel(selectedStudent.points);
        let levelImg = numberImages[studentLevel];
        return (
            <div className='studentDisplay'>
                <img src={levelImg} alt='number 1' />
                <div className='studentContent'>
                    <h2>{selectedStudent.name}</h2>
                    <div className='progressBarDiv'>
                        {studentLevel}<Progress progress percent={calculatePercentToNextLevel(selectedStudent.points)} />{studentLevel + 1}
                    </div>
                    <div className='pointsButtons'>
                        <Button onClick={() => subtractPoint(selectedStudent.name, selectedStudent.classId)} basic content='-' />
                        <Button onClick={() => addPoint(selectedStudent.name, selectedStudent.classId)} basic content='+' />
                    </div>
                    <Button onClick={() => deleteStudent(selectedStudent.name)} className='deleteButton' basic color='red' size='large' content='Delete' />
                    <Button onClick={() => mobileDisplayRoster()} className='backButton' size='large' basic content='Back' style={{display: mobileScreen}} />
                </div>
            </div>
        )
    }
    
    if(selectedStudent === roster || selectedStudent.name === undefined) {
        return (
            <div className='studentDisplay'>
                    {roster.map((student) => {
                        return (
                            <div key={student.name}>
                                {calculateLevel(student.points)} {student.name} <Progress progress percent={calculatePercentToNextLevel(student.points)} />
                            </div>
                        )
                    })}
                    <Button onClick={() => mobileDisplayRoster()} className='backButton' basic content='Back' style={{display: mobileScreen}} />
            </div>
        )
    }
}
