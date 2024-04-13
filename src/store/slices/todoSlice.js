import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            { id: uuid(), content: 'Learn JS', completed: true },
            { id: uuid(), content: 'Learn React', completed: false },
        ],
    },
    reducers: {
        add_todo: (state, action) => {
            const todo = {
                id: uuid(),
                content: action.payload,
                completed: false,
            }
            state.items.push(todo)
        },
        remove_todo: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload)
        },
        toggle_completed: (state, action) => {
            const todoIndex = state.items.findIndex(
                (todo) => todo.id === action.payload
            )
            const todo = state.items[todoIndex]
            todo.completed = !todo.completed
        },
    },
})

export const { add_todo, remove_todo, toggle_completed } = todoSlice.actions

export default todoSlice.reducer