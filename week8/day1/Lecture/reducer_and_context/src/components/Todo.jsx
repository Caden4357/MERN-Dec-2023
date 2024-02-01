import React, {useState, useContext} from 'react';
import { todoContext } from '../../context/TodoContextReducer';
const Todo = (props) => {
    const {todoList, dispatch, types} = useContext(todoContext)
    const [todoTitle, setTodoTitle] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        // Still make API call here if needed
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            todoTitle:todoTitle,
            isCompleted:false
        }
        // setTodoList([...todoList, newTodo])
        dispatch({type:types.ADD_TODO, payload:newTodo})
        setTodoTitle('')
    }
    return (
        <div>
            <h1>Add A Todo</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
)}

export default Todo;