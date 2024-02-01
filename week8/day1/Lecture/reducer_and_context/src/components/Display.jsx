import React, {useContext} from 'react';
import { todoContext } from '../../context/TodoContextReducer';
const Display = (props) => {
    const {todoList, dispatch, types} = useContext(todoContext)

    const deleteHandler = (id) => {
        dispatch({
            type:types.DELETE_TODO,
            payload:id
        })
    }
    return (
        <div>
            {
                todoList.map((todo ) => (
                    <div key={todo.id}>
                        <h1>Title: {todo.todoTitle}</h1>
                        <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
)}

export default Display;