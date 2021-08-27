import React from 'react'
import Main from "./Component/Main/Main";
import Header from "./Component/Header/Header";
import SearchPanel from "./Component/serh-panel/serh-panel";
import {useStyles} from "./AppStyled"
import TextAddForm from "./Component/textarea/textarea";


function App(props) {
  const c = useStyles()

  let doneEll = props.arr.filter(el => el.done).length;
  let activeEll = props.arr.length - doneEll;
  let visible = props.filterElement(props.filterVisibleElement(props.arr, props.visibility),
    props.label)

  return (
    <div className={c.app}>
      <div className={c.root}>
        <Header active={activeEll}
                done={doneEll}/>
        <SearchPanel onLabelChange={props.onLabelChange}
                     visibleElement={props.visibleElement}
                     visibility={props.visibility}/>
        <Main arr={props.arr}
              deleteTodos={props.deleteTodos}
              isImportance={props.isImportance}
              isDone={props.isDone}
              visible={visible}/>
        <TextAddForm addedNewObject={props.addedNewObject}/>
      </div>
    </div>
  );
}

export default App;
