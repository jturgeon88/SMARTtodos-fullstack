import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
 constructor (props) {
   super(props);

 }

 componentDidMount() {
   this.props.fetchSteps(this.props.todo_id);
 }

 render () {
   const { steps, todo_id, createStep } = this.props;
   const stepListItems = steps.map(step => <StepListItemContainer key={step.id} step={step} />)
   return (
     <div>
       <ul className="step-list">
         {stepListItems}
       </ul>
       <StepForm createStep={createStep} todo_id={todo_id} />
     </div>
   );
 }
}

export default StepList;
