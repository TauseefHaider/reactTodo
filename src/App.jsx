
import './App.css'
import Input from './Components/Input'
import Button from './Components/Button'
import { useState, useEffect } from 'react'
import logo from "../public/del.svg";
import edit from "../public/edit.svg";


function App() {
  let data = [];
  const [todos, setTodos] = useState([]);
  let todosData = localStorage.getItem("todos");
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null); 
  const [editValue, setEditValue] = useState("");



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

  const deleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  const startEdit = (index, value) => {
    setEditIndex(index); // Set the task being edited
    setEditValue(value); // Set the current value to input
  };

  // Save the edited task
  const saveEdit = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? editValue : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null); // Exit edit mode
    setEditValue("");
  };

  return (
    <div className="bg-black w-full h-lvh mt-0 p-6 flex flex-col items-center gap-6">
      <h1 className='text-white text-center m-6 text-4xl font-bold'>Todo App</h1>
      <div className='flex gap-2 justify-center items-center aline-center'> 
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button onClick={addTodo} />
        
      </div>
      <div className='w-[420px] mr-3'>
        <h2 className='text-white text-2xl font-semibold ml-3 my-6' >Task List</h2>
        <ul className='bg-white p-2 rounded-lg'>
          {todos.map((todo,index) => (
          <li key={index} className='bg-black text-white m-3 rounded-lg px-3 p-3 flex justify-between'>
            {editIndex === index ? (
                
                <input
                  type="text"
                  className='rounded-lg text-black w-[300px] p-2'
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  
                />
              ) : (
                
                <div className="flex gap-1">
                  <p>{index + 1} -</p>
                  {todo}
                </div>
              )}

              <div className="flex gap-3">
                {editIndex === index ? (
                  
                  <button
                    onClick={saveEdit}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <img
                      onClick={() => startEdit(index, todo)}
                      src={edit}
                      className="cursor-pointer"
                    />
                     
                    <img
                      className="cursor-pointer"
                      src={logo}
                      alt="delete"
                      onClick={() => deleteTodo(index)}
                    />
                  </>
                )}
              </div>
          </li>
        ))}
        </ul>
      </div>
      
    </div>
  )
}

export default App
