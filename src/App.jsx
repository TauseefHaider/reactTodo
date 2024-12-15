
import './App.css'
import Input from './Components/Input'
import Button from './Components/Button'
import { useState, useEffect } from 'react'
import { use } from 'react';
function App() {
  let data = [];
  const [todos, setTodos] = useState([]);
  let todosData = localStorage.getItem("todos");
  const [inputValue, setInputValue] = useState("");



useEffect(() =>{
  
    data = JSON.parse(todosData)
    
  setTodos(data)
},[])

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log("todo", todos);
  }, [todos])


  const addTodo = () => {
       if(inputValue.trim()){
        setTodos([...todos,inputValue.trim()]);
        setInputValue("");
       }
  }

  return (
    <div className="bg-black w-full h-lvh mt-0 p-6 flex flex-col items-center gap-6">
      <h1 className='text-white text-center m-6 text-2xl font-bold'>Todo App</h1>
      <div className='flex gap-2 justify-center items-center aline-center'> 
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button onClick={addTodo} />
        
      </div>
      <div className='w-[300px] '>
        <h2 className='text-white text-xl font-semibold' >Todo List</h2>
        <ul className='text-white'>
          {todos.map((todo,index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
        </ul>
      </div>
      
    </div>
  )
}

export default App
