import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    todos: []
}


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            }

            )
        },
        toggleComplit(state, action) {
            const toggledTodo = state.todos.find(item => item.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed
        },
        removTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        }
    },
})

export const { addTodo, toggleComplit, removTodo } = todoSlice.actions

export default todoSlice.reducer