import React from 'react';
import './StudentDisplay.css';
import { Progress } from 'semantic-ui-react';
import { useEffect } from 'react/cjs/react.development';

/* eslint-disable */
export default function StudentDisplay({selectedStudent, setSelectedStudent, roster, classList, setClassList, selectedClass }) {
    const calculateLevel = (points) => {
        return Math.floor(points/100)
    }

    const calculatePercentToNextLevel = (points) => {
        return points - (calculateLevel(points)*100);
    }

    const addPoint = (studentName, studentClassId) => {
            console.log(selectedClass)
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
                                                        points: student.points++,
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
                        console.log(selectedClass)
        };

    if(selectedStudent.name !== undefined) {
        console.log(selectedStudent)
        return (
            <div className='studentDisplay'>
                <h2>{calculateLevel(selectedStudent.points)}</h2>
                    {selectedStudent.name}
                    <Progress progress percent={calculatePercentToNextLevel(selectedStudent.points)} />
                    <button>-</button>
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
