import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTodoItem } from '../../stores/todos/action'

const TodoItemDetail = ({ todo, closeDetail }) => {
  const [data, setData] = useState({
    ...todo
  })

  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    e.preventDefault()
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleClickUpdate = () => {
    dispatch(updateTodoItem(data))
    closeDetail()
  }

  return (
    <div className='todo-item-detail'>
      <input 
        type='text' 
        value={data.title} 
        className='todo-item-detail-name'
        name='title'
        onChange={handleChange}
      />
      <label htmlFor="des" className='todo-item-detail-des'>Description</label>
      <textarea 
        id="des" 
        rows="6" 
        name='des'
        value={data.des}
        onChange={handleChange} 
      />
      <div className='date-piority'>
        <div className='date'>
          <label htmlFor="date">Due Date</label>
          <input 
            type="date" 
            id="date" 
            name='dueDate'
            value={data.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className='piority'>
          <label htmlFor='piority'>Piority</label>
          <select 
            name="piority" 
            id='piority' 
            value={data.piority}
            onChange={handleChange}
          >
            <option value='low'>low</option>
            <option value='normal'>normal</option>
            <option value='high'>high</option>
        </select>
        </div>
      </div>
      <button className='btn btn--green' onClick={handleClickUpdate}>Update</button>
    </div>
  );
};

export default TodoItemDetail