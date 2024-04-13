import './styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { remove_todo } from '../../store/slices/todoSlice'
import { useState } from 'react';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()

    
    const [filter, setFilter] = useState('all');
    const [activeButton, setActiveButton] = useState(null);

    const deleteTask = (id) => {
        dispatch(remove_todo(id))
    }

    const handleFilterBtn = (filterType) => {
        setFilter(filterType);
        setActiveButton(filterType);
    }

    return (
        <>
            <div>
                <div className='filter'>
                    <button className={activeButton === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleFilterBtn('all')}>All</button>
                    <button className={activeButton === 'completed' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleFilterBtn('completed')}>Completed</button>
                    <button className={activeButton === 'uncompleted' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleFilterBtn('uncompleted')}>Uncompleted</button>
                </div>
                {todos.map((todo) => {
                    if (filter === 'all' || (filter === 'completed' && todo.completed) || (filter === 'uncompleted' && !todo.completed)) {
                        return (
                            <div key={todo.id} className='todos'>
                                <h3>{todo.content}</h3>
                                <button 
                                    className='delete'
                                    onClick={() => deleteTask(todo.id)}
                                >
                                    x
                                </button>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </>
    );
}
export default TodoList;
