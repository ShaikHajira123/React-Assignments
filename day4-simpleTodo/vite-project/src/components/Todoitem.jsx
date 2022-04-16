
import './Todo.css'
export const Todoitem = ({data,handleStatus})=>{
    return (
    <div className="todoitem">
  
        {data.title}        

        
        <button onClick={()=>handleStatus(data.id)} 
                className={data.status ?"green" : "skyblue"}></button>
        </div>
 
    )    
           
    
}