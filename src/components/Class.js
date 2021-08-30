import React from 'react'

export default function Class(props) {
    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    {props.classInfo.id}
                </div>
                <div className="meta">
                    Students: {props.classInfo.roster.length}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">View Class</div>
                        <div className="ui basic red button">Delete Class</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
