import {RerenderApp} from "../render";

const state = {
  arr:[
  {todos: "вивчити реакт", id: 1 , done: false, importance: true},
  {todos: "write todo", id: 2 , done: false, importance: false},
  {todos: 'learn guitar song', id: 3 , done: false, importance: true},
  {todos: 'drink coffee', id: 4, done: false, importance: false}
  ],
  label: "",
  visibility: "All",
};

let newId = 100;

export let deleteTodos = (id) => {
 let swapArr = (arr) => {
   const idx = arr.findIndex((el) => el.id === id);


   const newArray = [
     ...arr.slice(0, idx),
     ...arr.slice(idx + 1)
   ];

   return newArray
 }
 let arr2 = swapArr(state.arr)

  state.arr = arr2
  RerenderApp(state)
}

export let isDone = (id) => {
  let swapArr = (arr) => {
    const idx = arr.findIndex((el) => el.id === id);
    let newElement ={ ...arr[idx], done: !arr[idx].done}

    const newArray = [
      ...arr.slice(0, idx),
      newElement,
      ...arr.slice(idx + 1)
    ];

    return newArray
  }
  let arr2 = swapArr(state.arr)

  state.arr = arr2
  RerenderApp(state)
}

export let isImportance = (id) => {
  let swapArr = (arr) => {
    const idx = arr.findIndex((el) => el.id === id);
    let newElement ={ ...arr[idx], importance: !arr[idx].importance}

    const newArray = [
      ...arr.slice(0, idx),
      newElement,
      ...arr.slice(idx + 1)];

    return newArray
  }
  let arr2 = swapArr(state.arr)

  state.arr = arr2
  RerenderApp(state)
}

export let addedNewObject = (text) => {
  let newObg = {
    todos: text,
    id: newId++ ,
    done: false,
    importance: false,
  }

  let arr2 = [ ...state.arr, newObg];

  state.arr = arr2
  RerenderApp(state)
}

export let onLabelChange = (e) => {
    state.label = e.target.value
  RerenderApp(state)
};

export let filterElement = (item, label) => {

  let newArr = item.filter( el => {
    if (label == "") {
      return el
    } else if (el.todos.toLowerCase().
    includes(label.toLowerCase())) {
      return el
    }
  })

return newArr
}

export let visibleElement = (on) => {
  state.visibility = on
  RerenderApp(state)
}

export let filterVisibleElement = (item, visible) => {
 let newArr = item.filter( el => {
    if (visible == "All") {
      return el
    } else if (visible == "Done") {
      return el.done == true
    } else if (visible == "Active") {
      return el.done == false
    }
  })
  return newArr
}




export default state