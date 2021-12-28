import * as Types from './actionType'

let todoLists = JSON.parse(localStorage.getItem('todoLists'))
let inititalState = todoLists ? todoLists : []

const todos = (state = inititalState, actions) => {
	const index = actions.payload ? state.findIndex((todo) => actions.payload.id === todo.id) : -1
	switch (actions.type) {
		case Types.ADD_NEW_TASK:
			state.push(actions.payload)
			localStorage.setItem('todoLists', JSON.stringify(state))
			return [...state]
		case Types.CHANGE_STATUS_TODO_ITEM:
			state[index] = actions.payload
			localStorage.setItem('todoLists', JSON.stringify(state))
			return [...state] 
		case Types.UPDATE_TODO_ITEM:
			state[index] = actions.payload
			localStorage.setItem('todoLists', JSON.stringify(state))
			return [...state]
		case Types.DELETE_TODO_ITEM:
			state.splice(index, 1)
			localStorage.setItem('todoLists', JSON.stringify(state))
			return [...state]
		case Types.DELETE_ALL_TODO_ITEM_CHECKED:
			const todoItemsNotChecked = state.filter((todo) => todo.status === false)
			localStorage.setItem('todoLists', JSON.stringify(todoItemsNotChecked))
			return [...todoItemsNotChecked]
		case Types.SEARCH_TODO_ITEM:
			const { keywork } = actions
			const todos = JSON.parse(localStorage.getItem('todoLists'))
			if (!keywork) {
				return [...todos]
			}
			const todoItemSearched = todos.filter((todo) => todo.title.toLowerCase().replace(/ /g,'').indexOf(keywork.toLowerCase().replace(/ /g,'')) !== -1)
			return [...todoItemSearched]
		default:
			return [...state]
	}
}

export default todos
