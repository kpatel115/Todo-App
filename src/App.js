import React, {useState} from 'react'
import { TodoList } from './TodoList'

function App() {
  const [todos] = useState([])
  const [setTodos] = useState([])
  return (
    <>
      <TodoList todos={todos} />
      <button>Add Item</button>
      <button>Clear All</button>
      <div>Left to do: 0</div>
    </>
  );
}

export default App;
