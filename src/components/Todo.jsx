import React from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from '../state/atoms/TodoState'

const Todo = ({id,text,index}) => {
   
    const [todo,setTodos] = useRecoilState(todoState)

    function deleteTodo(){
            setTodos((prevTodos)=>{
            return prevTodos.filter((todo)=>todo.id!==id) 
        })
    }

  return ( 
    <div className='row justify-content-center'>
        <div className="col-2">
            <div className="row bg-secondary rounded m-1">
                
                <div className="col-5">
                   <p className='text-start text-white'> {text}</p>
                </div>  

                <div className="col-7 d-flex justify-content-end">
                    <button className='btn btn-danger' onClick={deleteTodo}>X</button>  
                </div> 
                
            </div>   
        </div>      
    </div>  
  ) 
}

export default Todo
