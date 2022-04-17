import  {useState} from 'react'
import {Todolist} from './Todolist'
import {Todoitem} from './Todoitem'
import {nanoid} from 'nanoid'
import './Todo.css'

export const Todo = () =>{
    const [todoslist ,setTodoslist] = useState([])
     
    const getData = (data) =>{
      const payload = {
         title : data,
          status : true,
          id :nanoid(5),
    }
         setTodoslist([...todoslist,payload])
      // console.log(todoslist)
    }
    const handleStatus = (id)=>{
       console.log(id)
       setTodoslist(todoslist.map((e) => (e.id===id ?{...e,status:!e.status} : e)))
    }


    return (
        <div className='todolist'>
             
        
            {
               todoslist.map((e) => (
                <Todoitem handleStatus={handleStatus} data={e}></Todoitem>
              ))
            }
        <Todolist getData={getData} />
          </div> 
    )

}

