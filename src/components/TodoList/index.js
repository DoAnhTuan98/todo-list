import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllTodoItemChecked, searchTodoItem } from '../../stores/todos/action'
import TodoItem from '../TodoItem'

const TodoList = () => {
  const [keywork, setKeywork] = useState('')
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const todoItemsDoneLists = todos.filter((todo) => todo.status === true)
  const showTodoItems = (todos) => {
    return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
  }

  const handleChangeKeywork = (e) => {
    const { value } = e.target
    setKeywork(value)
  }

  const handleEnterPress = (e) => {
    const key = e.which
    if (key === 13) {
      dispatch(searchTodoItem(keywork))
    }
  }

  const handleClickRemove = () => {
    dispatch(deleteAllTodoItemChecked())
  }

  return (
    <div className='todo-list'>
      <h3 className='todo-list-title'>To Do List</h3>
      <input 
        type='text' 
        placeholder='Search...' 
        className='todo-list-search'
        name='keywork'
        value={keywork}
        onChange={handleChangeKeywork}
        onKeyPress={handleEnterPress}
      />
      {showTodoItems(todos.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate)))}
      {todoItemsDoneLists.length !== 0 
      ? 
        <div className='bulk'>
          <div className='bulk-title'>Bulk Action:</div>
          <div className='bulk-action'>
            <button className='btn btn--blue'>Detail</button>
            <button className='btn btn--red' onClick={handleClickRemove}>Remove</button>
          </div>
        </div>
      : ''
      }
    </div>
  );
};

export default TodoList
