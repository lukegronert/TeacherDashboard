import React from 'react'

export default function Class(props) {
    return (
        <div className="ui four cards">
            <a className="red card">
                <div className='content'>
                    {props.classInfo.id}
                </div>
            </a> 
        </div>
    )
}
