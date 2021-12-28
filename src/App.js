import NewTask from './components/NewTask'
import TodoList from './components/TodoList'
import appReducers from './stores'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './style/index.scss'

const store = createStore(appReducers)

function App() {
  return (
    <Provider store={store}>
      <div className='todo-app'>
        <NewTask />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
