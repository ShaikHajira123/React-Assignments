import { legacy_createStore as createStore} from "redux";

const ADD_TODOS = 'ADD_TODOS' 

const addtodo =(title)=> {
       return {
           type:ADD_TODOS,
           payload:{
            title:title,
            status:false,
           }
         
       }
}
const reducer= (store,action)=>{
    switch(action.type){
    case 'ADD_COUNT' :
        return {...store,counter: store.counter+action.payload}
    case ADD_TODOS :
        return {...store,todos:[...store.todos,action.payload]}
    default :
    return {...store}
}
}

const initState  ={
    counter:0,
    todos:[],
    theme:'dark',
}
const store = createStore(reducer,initState)
console.log(store.getState())

store.dispatch({ type:'ADD_COUNT',payload:1})

console.log(store.getState())

store.dispatch(addtodo('learn redux'))

console.log(store.getState())
store.dispatch(addtodo('learn typescript'))
console.log(store.getState())