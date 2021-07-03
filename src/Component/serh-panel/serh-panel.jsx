import React from 'react' ;
import s from './serh-panel.module.css'

  const SearchPanel = (props) =>  {

    const clickAll = () => {
     props.visibleElement("All")
    }

    const clickActive = () => {
      props.visibleElement("Active")
    }

    const clickDone = () => {
      props.visibleElement("Done")
    }

  return (
      <div className={s.panel}>
        <input placeholder={"search"}
               onChange={props.onLabelChange}/>
        <div className={"btn-group"}>
          <button className={"btn btn-outline-primary"}
                  onClick={clickAll}>
            All
          </button>
          <button className={"btn btn-outline-success"}
                  onClick={clickActive}>
            Active
          </button>
          <button className={"btn btn-outline-dark"}
                    onClick={clickDone}>
            Done
          </button>
        </div>
      </div>
    )
}

export default SearchPanel