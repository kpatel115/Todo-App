import React, {useState, useRef} from 'react'
import { TodoList } from './TodoList'
import {v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([{name: 'eat breakfast', id: 0, isComplete: false}]);
  const addRef = useRef()
  
  function addTodo(event) {
    const taskName = addRef.current.value
    if (taskName) {
      setTodos(oldTodos => {
        return [... oldTodos, {id: uuidv4(), name: taskName, isComplete: false}]
      })
      console.log(taskName);
      addRef.current.value = null
    } else {
      return null
    }
  }
  
  return (
    <>
      <TodoList todos={todos} />
      <input ref={addRef} type="text" />
      <button onClick={addTodo}>Add Item</button>
      <button>Clear All</button>
      <div>Left to do: 0</div>
    </>
  );
}

export default App;
