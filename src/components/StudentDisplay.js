import React from 'react';
import './StudentDisplay.css';
import { Progress } from 'semantic-ui-react';


export default function StudentDisplay({selectedStudent, setSelectedStudent, roster}) {
    const calculateLevel = (points) => {
        return Math.floor(points/100)
    }

    const calculatePercentToNextLevel = (points) => {
        return points - (calculateLevel(points)*100);
    }

    if(selectedStudent.name !== undefined) {
        console.log(selectedStudent)
        return (
            <div className='studentDisplay'>
                <h2>{calculateLevel(selectedStudent.points)}</h2>
                    {selectedStudent.name}
                    <Progress progress percent={calculatePercentToNextLevel(selectedStudent.points)} />
                    <button>Add Points</button>
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
