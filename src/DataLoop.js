import React from 'react'

export default function DataLoop({todo}) {
    return (
        <div>
            <input type='checkbox' checked={todo.isComplete} />
            { todo.name }
        </div>
    )
}