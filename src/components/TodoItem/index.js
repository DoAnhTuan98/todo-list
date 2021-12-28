import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeStatusTodoItem, deleteTodoItem } from '../../stores/todos/action'
import TodoItemDetail from '../TodoItemDetail';

const TodoItem = ({ todo }) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const isChecked = e.target.checked
    dispatch(changeStatusTodoItem({
      ...todo,
      status: isChecked
    }))
  }

  const handleClickDetail = () => {
    setIsOpenDetail(!isOpenDetail)
  }

  const handleClickRemove = () => {
    dispatch(deleteTodoItem(todo))
  }

  return (
    <div className='todo-item'>
      <div className='todo-item-info'>
        <input 
          type='checkbox' 
          name='status' 
          className='todo-item-info-checkbox'
          checked={todo.status}
          onChange={handleChange}
        />
        <div className='todo-item-info-name'>{todo.title}</div>
        <div className='todo-item-info-action'>
          <button className='btn btn--blue' onClick={handleClickDetail}>Detail</button>
          <button className='btn btn--red' onClick={handleClickRemove}>Remove</button>
        </div>
      </div>
      {isOpenDetail && <TodoItemDetail todo={todo} closeDetail={() => setIsOpenDetail(!isOpenDetail)} />}
    </div>
  );
};

export default TodoItem