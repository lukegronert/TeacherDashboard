import React from 'react';
import './ClassPage.css';

export default function ClassPage({selectedClass}) {
    return (
        <div className='container'>
            <h1>{selectedClass.id}</h1>
            <div className='roster'>
                {selectedClass.roster.map((student) => {
                    return (
                        <div>{student.name}</div>
                    )
                })}
            </div>
        </div>
    )
}
