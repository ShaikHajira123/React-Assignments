
import './Todo.css'
export const Todoitem = ({data,handleStatus})=>{
    return (
    <div className="todoitem">
  
        {data.title}        - 
       
         {data.status ? "✓" :"x"}
        
        <button className="btn" onClick={()=>handleStatus(data.id)}></button>
        </div>
 
    )    
           
    
}