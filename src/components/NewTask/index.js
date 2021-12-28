import React, { useState } from 'react'
import { validateTitle, validateDueDate } from '../../utils/validate'
import { addNewTaks } from '../../stores/todos/action'
import { useDispatch } from 'react-redux';
import * as uuid from 'uuid'

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const NewTask = () => {
    const [data, setData] = useState({
      id: '',
      title: '',
      des: '',
      dueDate: date,
      piority: 'normal',
      status: false
    })

    const [errors, setErrors] = useState({
      titleError: '',
      dueDateError: ''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
      const { value, name } = e.target
      setData({
        ...data,
        [name]: value
      })
    }

    const handleClick = (e) => {
      e.preventDefault()
      const messError = validateTitle(data.title)
      const dueDateMessError = validateDueDate(data.dueDate)
      if (!messError && !dueDateMessError) {
        dispatch(addNewTaks({
          ...data,
          id: uuid.v4()
        }))
        setData({
          id: '',
          title: '',
          des: '',
          dueDate: date,
          piority: 'normal',
          status: false
        })
      } else {
        setErrors({
          titleError: messError ? messError : '',
          dueDateError: dueDateMessError ? dueDateMessError : ''
        })
      }
    }

    return (
			<div className='new-task'>
				<h3 className='new-task-title'>New Task</h3>
        <input 
          type='text' 
          placeholder='Add new task...' 
          className='new-task-name input' 
          name='title'
          value={data.title} 
          onChange={handleChange}
        />
        {errors.titleError ? <p className='error'>{errors.titleError}</p> : ''}
        <label htmlFor="des" className='new-task-des'>Description</label>
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
        {errors.dueDateError ? <p className='error'>{errors.dueDateError}</p> : ''}
        <button className='btn btn--green' onClick={handleClick}>Add</button>
			</div>
    );
};

export default NewTask