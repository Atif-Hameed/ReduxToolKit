import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../store/todoSlice'

const Todos = () => {

    const allTodos = useSelector((state) => state.todo);
    const dispatch = useDispatch()
    const [todoText, setTodoText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTodo({ text: todoText, completed: false }));
            setTodoText('');
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter the todo.');
        }
    }

    const handleRemove = (todoId) => {
        console.log("id", todoId)
        dispatch( removeTodo(todoId) )
    }

    return (
        <>
            <div className='h-screen w-full flex justify-center items-center bg-gray-100' >
                <div className='w-[40%] p-4 h-[75%] bg-white rounded-lg' >
                    <div className='flex gap-2 items-center'>
                        <input onChange={(e) => setTodoText(e.target.value)} value={todoText} type="text" className='h-10 w-[85%] border-2 border-gray-300 rounded-lg font-medium px-3' placeholder='Enter To do...' name="" id="" />
                        <button onClick={() => handleAddTodo()} className='bg-green-600 rounded-lg p-2 w-[15%] font-bold text-white' >Add</button>
                    </div>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <div className='pt-14'>
                        {
                            allTodos.map((item, index) => (
                                <div key={index} className='h-9 items-center flex justify-between px-2 border-2 border-black rounded-md w-full' >
                                    <div className='text-lg font-semibold' >{item.text}</div>
                                    <button onClick={() => handleRemove(item.id)} className='text-xl font-bold text-red-600'>X</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todos
