import React from 'react' ;
import s from './TodoListItem.module.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {IconButton, Typography} from "@material-ui/core";


export default class TodoListItem extends React.Component {

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
          <div className={s.textArea}>
            <Typography
              noWrap
              key={this.props.id}
              style={style}
              className={classNames}
              onClick={onLabelClick}
            >
              {this.props.todos}
            </Typography>
            {/*<p>{this.props.todos.length}</p>*/}
          </div>
          <div className={s.iconsGroup}>
            <IconButton style={{color: 'black'}} onClick={onDeleted} aria-label="add an alarm">
              <DeleteForeverIcon/>
            </IconButton>
            <IconButton color='primary' onClick={OnMarkImportan} aria-label="add an alarm">
              {this.props.importance
                ? <StarIcon/>
                : <StarBorderIcon/>}
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
}

