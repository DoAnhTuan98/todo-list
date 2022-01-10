import * as Types from './actionType'

export const addNewTaks = (data) => {
  return {
    type: Types.ADD_NEW_TASK,
    payload: data
  }
}

export const changeStatusTodoItem = (data) => {
  return {
    type: Types.CHANGE_STATUS_TODO_ITEM,
    payload: data
  }
}

export const updateTodoItem = (data) => {
  return {
    type: Types.UPDATE_TODO_ITEM,
    payload: data
  }
}

export const deleteTodoItem = (data) => {
  return {
    type: Types.DELETE_TODO_ITEM,
    payload: data
  }
}

export const deleteAllTodoItemChecked = () => {
  return {
    type: Types.DELETE_ALL_TODO_ITEM_CHECKED
  }
}

export const searchTodoItem = (keywork) => {
  return {
    type: Types.SEARCH_TODO_ITEM,
    keywork
  }
}