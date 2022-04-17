
import '../../../../day4-reactTodo/vite-project/src/components/Todo.css'
export const Todoitem  =({data,handleStatus})=>{
   
    return(
        <div className='todoitem'>
            <input onClick={() => handleStatus(data.id)}
            className={data.status ? "checked":"notchecked"} type="checkbox" />
            {data.title}
            <button id="btn">★</button>
            
        </div>
    )
}