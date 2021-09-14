import React from 'react';
import './StudentDisplay.css';
import { Progress } from 'semantic-ui-react';

/* eslint-disable */
//Disabled eslint because no-unused-expressions was not letting my program run
export default function StudentDisplay({selectedStudent, roster, classList, setClassList, updateClassListLocalStorage }) {
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

    if(selectedStudent.name !== undefined) {
        return (
            <div className='studentDisplay'>
                <h2>{calculateLevel(selectedStudent.points)}</h2>
                    {selectedStudent.name}
                    <Progress progress percent={calculatePercentToNextLevel(selectedStudent.points)} />
                    <button onClick={() => subtractPoint(selectedStudent.name, selectedStudent.classId)}>-</button>
                    <button onClick={() => addPoint(selectedStudent.name, selectedStudent.classId)}>+</button>
            </div>
        )
    }
    
    return (
        <div className='studentDisplay'>
                {roster.map((student) => {
                    return (
                        <div key={student.name}>
                            {calculateLevel(student.points)} {student.name} <Progress progress percent={calculatePercentToNextLevel(student.points)} />
                        </div>
                    )
                })}
        </div>
    )
}
