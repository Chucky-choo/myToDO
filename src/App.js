import React from 'react'
import Main from "./Component/Main/Main";
import Header from "./Component/Header/Header";
import SearchPanel from "./Component/serh-panel/serh-panel";
import s from "./app.module.css"
import TextAddForm from "./Component/textarea/textarea";


function App(props) {
  let doneEll = props.arr.filter(el => el.done).length;
  let activeEll = props.arr.length - doneEll;
  let visible = props.
  filterElement(props.filterVisibleElement(props.arr, props.visibility),
    props.label )

  return (
    <div className={s.app}>
      <div className={s.body}>
        <Header
          active={activeEll}
          done={doneEll}
        />
        <SearchPanel onLabelChange={props.onLabelChange}
                     visibleElement={props.visibleElement}/>
        <Main
          arr={props.arr}
          deleteTodos={props.deleteTodos}
          isImportance={props.isImportance}
          isDone={props.isDone}
          visible={visible}
        />
        <TextAddForm
          addedNewObject={props.addedNewObject}
        />
      </div>
    </div>
  );
}

export default App;
