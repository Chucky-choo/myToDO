import React from 'react' ;
import s from './TodoListItem.module.css';

export default class TodoListIten extends React.Component {

  render() {
    let OnMarkImportan = () => {
      this.props.isImportance(this.props.id)
    };

    let onLabelClick = () => {
      this.props.isDone(this.props.id)
    }


    let style = {
      color: this.props.importance ? 'blue' : 'black'
    }

    let classNames = s.usually;
    if (this.props.done) {
      classNames += " " + s.done
    }

    let onDeleted = () => {
      return this.props.deleteTodos(this.props.id)
    }


    return (
      <div key="ul">
        <div className={s.main}>
          <p
            key={this.props.id}
            style={style}
            className={classNames}
            onClick={onLabelClick}
          >
            {this.props.todos}
          </p>
          <div className={"btn-group"}>
            <button
              className={"btn btn-danger"}
              onClick={onDeleted}
            >
              Del
            </button>
            <button
              className="btn btn-success"
              onClick={OnMarkImportan}
            >
              !
            </button>
          </div>
        </div>
      </div>
    )
  }
}

