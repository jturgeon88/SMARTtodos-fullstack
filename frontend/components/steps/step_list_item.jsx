import React from 'react';
import merge from 'lodash/merge';

class StepListItem extends React.Component {
  constructor (props) {
    super(props);

    this.toggleStep = this.toggleStep.bind(this);
  }

  toggleStep(e) {
    const toggledStep = merge({}, this.props.step, {
      done: !this.props.step.done
    });
    this.props.updateStep(toggledStep);
  }


  render () {
    // step gets passed down from the StepList component
    const { step, receiveStep, deleteStep } = this.props;
    const { title, body, done } = step;
    return(
      <li className="step-header">
        <div className="step-info">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        <div className="step-buttons">
          <button
            onClick={this.toggleStep}
            className={ done ? "done" : "undone" } >{ done ? "Undo" : "Done" }</button>
          <button className="delete-button" onClick={() => deleteStep(step)}>Delete</button>
        </div>
      </li>
    );
  }
}

export default StepListItem;
