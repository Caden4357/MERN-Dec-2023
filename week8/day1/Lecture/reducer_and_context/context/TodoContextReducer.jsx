import { createContext, useReducer } from "react";

export const todoContext = createContext()
const types = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO:'DELETE_TODO'
}
// state is the state in this case todoList[]
// action is an OBJECT with different key value pairs type SHOULD always be included 
// type is either gonna 'ADD' or 'DELETE', 'UPDATE' ... 
const reducer = (state, action) => {
    console.log('STATE', state);
    console.log('ACTION', action);
    switch(action.type) {
        case types.ADD_TODO:
            return [...state, action.payload]
        case types.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}


export const TodoProvider = (props) => {
    // const [todoList, setTodoList] = useState([])
    //      STATE,    function            dispatch f, initialState
    const [todoList, dispatch] = useReducer(reducer, [])

    return (
        <todoContext.Provider value={{todoList, dispatch, types}}>
            {props.children}
        </todoContext.Provider>
    )
}