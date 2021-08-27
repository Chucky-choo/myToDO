import React from 'react' ;
import TodoListItem from "./TodoLIstItem/TodoListIten";
import s from './Main.module.css'

const Main = (props) => {
  const element = props.visible.map( item => {
    return (
      <div className={s.wrapperTodos}>
        <TodoListItem
          key={item.id}
          deleteTodos={props.deleteTodos}
          isImportance={props.isImportance}
          isDone={props.isDone}
          { ...item}
        />
      </div>


  )});
  return element


}



export default Main