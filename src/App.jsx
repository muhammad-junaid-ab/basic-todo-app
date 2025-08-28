import React, { useState } from 'react'

const App = () => {
  let [todo, setTodo] = useState('');
  let [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { todo }])
    setTodo('')
  }

  const deleteHandler = (i) => {
    let copyTodo = [...todos];
    copyTodo.splice(i, 1);
    setTodos(copyTodo);
  }


  let AllTodos = <div className='text-center text-xl font-thin text-red-600 '>No Todos Available</div>

  if (todos.length > 0) {
    AllTodos = todos.map((item, idx) => {
      return (
        <div key={idx} className='flex gap-2 items-center'>
          <div className='text-base'>{item.todo}</div>
          <button onClick={() => deleteHandler(idx)} className='bg-red-600 text-white font-bold cursor-pointer px-3 py-1 rounded-lg text-sm'>delete</button>
        </div>
      )
    })
  }


  return (
    <div className='bg-gray-300 rounded-2xl border-4 flex flex-col items-center gap-10 w-[90vw] mx-8 pt-10 pb-28'>
      <h1 className='text-5xl font-bold text-center text-gray-600'>Todo App</h1>
      <form className='flex gap-5' onSubmit={submitHandler}>
        <input value={todo} onChange={e => setTodo(e.target.value)} className='pl-2 pr-10 py-2 w-full bg-white rounded-lg' type="text" placeholder='Enter Your Todo' />
        <button className='bg-black text-white font-bold px-5 py-2 rounded-lg cursor-pointer'>Add</button>
      </form>
      {
        AllTodos
      }
    </div>
  )
}
export default App
