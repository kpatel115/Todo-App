import React from 'react'
import DataLoop from './DataLoop'

export const TodoList = ({ todos }) => {
    return (
        todos.map( todo => {
            return <DataLoop key={todo.id} todo={todo} />
        })
    )
}