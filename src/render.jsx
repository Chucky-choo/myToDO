import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {
  deleteTodos,
  isImportance,
  isDone,
  addedNewObject,
  filterElement,
  onLabelChange,
  visibleElement,
  filterVisibleElement
} from './State/State'
import reportWebVitals from "./reportWebVitals";



export let RerenderApp = (props) => {
  ReactDOM.render(<App
      arr={props.arr}
      label={props.label}
      visibility={props.visibility}
      deleteTodos={deleteTodos}
      isImportance={isImportance}
      isDone={isDone}
      addedNewObject={addedNewObject}
      onLabelChange={onLabelChange}
      filterElement = {filterElement}
      visibleElement={visibleElement}
      filterVisibleElement={filterVisibleElement}
    />,
    document.getElementById('root'));
}

reportWebVitals()