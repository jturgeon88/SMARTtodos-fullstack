import { connect } from 'react-redux';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';
import { fetchSteps, createStep } from '../../actions/step_actions';


const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
  fetchSteps: (...args) => dispatch(fetchSteps(...args)),
  createStep: (...args) => dispatch(createStep(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
