import React from "react";
import s from './Header.module.css'

const Header = (props) => {
  const text = props.active + `more to do,` + props.done +` done`


  return <div>
    <div>
      <h1>My toDo</h1>
    </div>
    <div className={s.hdflex}>
      <h2>List 2.0</h2>
      <p>
        {text}
      </p>
    </div>
  </div>
}

export default Header
