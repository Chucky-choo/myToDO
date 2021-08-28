import React from 'react' ;
import TodoListItem from "./TodoLIstItem/TodoListIten";
import s from './Main.module.scss'

const Main = (props) => {

  const element = props.visible.map( item => {
    return (
      <div className={s.wrapperTodo}>
        <TodoListItem
          key={item.id}
          deleteTodos={props.deleteTodos}
          isImportance={props.isImportance}
          isDone={props.isDone}
          { ...item}
        />
      </div>


  )});


  return (
    <div className={s.container__wrapperTodo}>
      { element }
    </div>
  )




}



export default Main