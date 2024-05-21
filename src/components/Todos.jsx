import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from '../state/atoms/TodoState'
import Todo from './Todo'

const Todos = () => {
    const [todos,setTodos]=useRecoilState(todoState)
    const [inputText,setInputText] =useState('')

    function addTodo(e){
        e.preventDefault()
        setTodos((prevTodos)=>[...prevTodos ,{id:Math.random(), text:inputText}])
        setInputText('')
    } 

    function clearTodos(){
        setTodos([])
    }
    
    function handleInputChange(e){
        setInputText(e.target.value)
    }

    console.log("the value",todos); 
    return (
    <div> 
        <div className="row justify-content-center pt-5 p-3">
            <div className="col-5 shadow-lg m-4  pt-4 ">
                <form action="" >
                    <input value={inputText} onChange={handleInputChange} className='form-control ' type="text" />
                    <button className='btn btn-success m-2 ' onClick={addTodo}>ADD</button>
                    <button className='btn btn-warning m-2' onClick={clearTodos}>clear</button> 
                </form>
            </div>
            <div>
                {   
                    todos.map((todo,index)=>{  
                    return ( 
                     <Todo key={todo.id} index={index} text={todo.text} id={todo.id } />  
                    )
                })
            } 
            </div>  
        </div>
    </div>
  )
}

export default Todos
