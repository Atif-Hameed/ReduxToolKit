import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from '../store/todoSlice'

const Todos = () => {

    const allTodos = useSelector((state) => state.todo);
    const dispatch = useDispatch()
    const [todoText, setTodoText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [open, setOpen] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTodo({ text: todoText, completed: false }));
            setTodoText('');
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter the todo.');
        }
    }

    const handleRemove = (todoText) => {
        dispatch(removeTodo(todoText))
    }

    const handleOpen = (todo) => {
        setSelectedTodo(todo)
        setTodoText(todo.text)
        setOpen(true)
    }

    const handleUpdate = () => {
        dispatch(updateTodo({ id: selectedTodo.id, text: todoText }));
        setOpen(false);
    };

    return (
        <>
            <div className=' relative h-screen w-full flex justify-center items-center bg-gray-100' >
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
                                    <div className='flex gap-2'>
                                        <button onClick={() => handleRemove(item.text)} className='text-xl font-bold text-red-600'>X</button>
                                        <button onClick={() => handleOpen(item)} className='text-green font-bold'>EdT</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {open &&
                    <div className='w-[20rem] flex flex-col bg-black h-[15rem] justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' >
                        <input onChange={(e) => setTodoText(e.target.value)} type="text" value={todoText} name="" id="" />
                        <button onClick={() => handleUpdate()} className='bg-green-600 p-2 w-fit' >Update</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Todos
