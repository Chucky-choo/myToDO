import React from 'react' ;
import TodoListIten from "../TodoLIstItem/TodoListIten";


const Main = (props) => {
  const element = props.visible.map( item => {
    return (
      <TodoListIten
        key={item.id}
        deleteTodos={props.deleteTodos}
        isImportance={props.isImportance}
        isDone={props.isDone}
        { ...item}
      />

  )});
  return element


}



export default Main