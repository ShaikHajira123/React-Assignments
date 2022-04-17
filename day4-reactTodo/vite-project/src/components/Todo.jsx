import React from "react";
import { useState } from "react";
import { Todolist } from "../../../../day4-reactTodo/vite-project/src/components/Todolist";
import { Todoitem } from "../../../../day4-reactTodo/vite-project/src/components/Todoitem";
import  {nanoid} from 'nanoid'
import {Strike} from '../../../../day4-reactTodo/vite-project/src/components/Strike'
import '../../../../day4-reactTodo/vite-project/src/components/Todo.css'

  export const Todo = () =>{
    const [todolist , setTodolist] = useState([])
    const [strike, setStrike] =useState(false);
    
    const hide = (del) =>{
            todolist.splice(del, 1);
            setTodolist([...todolist]);
         }
    

      const getData = (data) => {
           const payload = {
               title : data,
               status : false,
               id : nanoid(6),
           }
          setTodolist([...todolist,payload])
      }

      const handleStatus = (id) =>{
          setTodolist(
              todolist.map((e) => (e.id===id ?{...e,status:!e.status} : e)))
      }

    return(
        <div className="todolist">
        
        <Todolist getData={getData} />
        {
        todolist.map(e => (
           <Todoitem handleStatus={handleStatus} data={e}></Todoitem>
        ))
  }
          { strike ? <Strike hide={hide}  todolist={todolist} /> : null} 
    <button  onClick={() => { setStrike(!strike) }}>Show Completed Todos</button>
     
      
        </div>
        
    )
    }