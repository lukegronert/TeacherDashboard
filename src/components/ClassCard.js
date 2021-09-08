import React from 'react';
import { Link } from 'react-router-dom';

export default function Class({classInfo, selectedClass, setSelectedClass, deleteClass, updateSelectedClassLocalStorage}) {
    const selectClass = () => {
        setSelectedClass(classInfo)
        // Sets the localstorage value of selectedClass to the class that the user chose to view
        updateSelectedClassLocalStorage(classInfo)
    }

    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    {classInfo.id}
                </div>
                <div className="meta">
                    Students: {classInfo.roster.length}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={() => selectClass()}><Link to="/classpage">View Class</Link></div>
                        <div className="ui basic red button" onClick={() => deleteClass(classInfo.id)}>Delete Class</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
