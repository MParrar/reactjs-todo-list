import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({ todos, setTodos, filterTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">

                {filterTodos.map((todo) => (
                    <Todo key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text}
                    />

                ))}


            </ul>
        </div>
    )
}
