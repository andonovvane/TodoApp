import './styles.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { add_todo } from '../../store/slices/todoSlice'

const NewTodo = () => {
    const dispatch = useDispatch()
    const [newValue, setNewValue] = useState('')

    const submitNewTodo = (e) => {
        e.preventDefault()
        if(newValue.trim()) {
            dispatch(add_todo(newValue.trim()))
            setNewValue('')
        }
    }

    const handleChange = (e) => {
        const newValue = e.currentTarget.value
        setNewValue(newValue)
    }

    return (
        <>
        <form className='newTodo' onSubmit={submitNewTodo}>
            <input 
            type="text" 
            placeholder='Your next todo'
            value={newValue}
            onChange={handleChange}
            />
            <button type='submit' className='add'>Add</button>
        </form>
        </>
    )
}

export default NewTodo;