import React from 'react';
import './StudentDisplay.css';


export default function StudentDisplay({selectedStudent}) {
    return (
        <div className='studentDisplay'>
            {selectedStudent.name} {selectedStudent.points}
            <div class="ui progress">
                <div class="bar"></div>
            </div>
        </div>
    )
}
