import {useContext,createContext} from 'react'

export const ToContext=createContext({
   todos: [
      {
         id: 1,
         todo: "todo msg",
        completed: false ,
      }
      
   ],
   addTodo: (todo)=>{},
   updateTodo: (id , todo)=>{},
   deleteTodo: (id)=>{},
   toogleComplete: (id)=>{}
}) 

export const useTodo=()=>{
   return useContext(ToContext)
}
export const TodoProvider=ToContext.Provider