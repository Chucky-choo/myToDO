import React from "react";
import s from './Header.module.scss'
import flower from '../../img/HeaderFlower.png'

const Header = () => {

  return (
    <div className={s.wrapper}>
      <h1>My ToDo List</h1>
      <img src={flower} alt=""/>
    </div>
  )
}
export default Header
