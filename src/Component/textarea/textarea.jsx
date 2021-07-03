import React, {Component} from "react";
import s from './textarea.module.css'

export default class TextAddForm extends Component {

  state = {
    label: ""
  };


  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addedNewObject(this.state.label)
    this.setState({
      label: ""
    })
  }

  render(props) {
    return (
      <form onSubmit={this.onSubmit}
            className={s.panel}>
        <input
          type="text"
          onChange={this.onLabelChange}
          value={this.state.label}
          placeholder={"add text"}
        />
        <button className="btn btn-primary">
          add
        </button>
      </form>
    )
  }
}