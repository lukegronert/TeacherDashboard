import React from 'react';
import { useState } from 'react';
import Class from './Class';

export default function ClassList() {
    const [classList, setClassList] = useState([
        {
            id: 'AB2',
            roster: [
                {
                    name: 'Hans',
                },
                {
                    name: 'Tammy',
                },
                {
                    name: 'Yuni',
                },
                {
                    name: 'Nina',
                },
            ]
        },
        {
            id: 'ED1',
            roster: [
                {
                    name: 'Ivan'
                },
                {
                    name: 'Fifi'
                },
                {
                    name: 'Peter'
                }
            ]
        }
    ]);

    return (
        <div>
            {classList.map((classInfo) => {
                return (
                    <Class classInfo={classInfo} />
                )
            })}
        </div>
    )
}
