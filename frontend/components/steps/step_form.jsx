import React from 'react';
import { uniqueId } from '../../util/id_generator';

class StepForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false,
      todo_id: this.props.todo_id
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = Object.assign({}, this.state);
    this.props.createStep(this.props.todo_id, step).then(
      this.setState({
        title: "",
        body: ""
      }) // reset form
    );
  }

  render () {

    return (
      <form className="step-form" onSubmit={this.handleSubmit}>
        <label>Progress Goal:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="progress goal"
            required
            >
          </input>
        </label>
        <label>Description:
          <input
            className="input"
            ref="body"
            value={ this.state.body }
            placeholder="land first client"
            onChange={ this.update('body') }
            required />
        </label>
        <button className="create-button">Create Progress Goal</button>
      </form>
    );
  }
}

export default StepForm;
