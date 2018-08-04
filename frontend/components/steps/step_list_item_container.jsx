import { connect } from 'react-redux';
import StepListItem from './step_list_item';
// Actions
import { updateStep, deleteStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { step }) => ({
  updateStep: step => dispatch(updateStep(step)),
  deleteStep: step => dispatch(deleteStep(step))
});

export default connect(
  null, // step prop is already passed in
  mapDispatchToProps
)(StepListItem);
