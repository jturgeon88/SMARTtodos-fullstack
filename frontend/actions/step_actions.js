import * as StepAPIUtil from '../util/step_api_util';

export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = step => ({
  type: REMOVE_STEP,
  step
});


// asynch actions:

export const fetchSteps = (todo_id) => dispatch => (
  StepAPIUtil.fetchSteps(todo_id).then(steps => dispatch(receiveSteps))
);

export const createStep = (todo_id, step) => dispatch => (
  StepAPIUtil.createStep(todo_id, step)
    .then(
      step => dispatch(receiveStep(step))
    )
);

export const updateStep = step => dispatch => (
  StepAPIUtil.updateStep(step)
    .then(
      step => dispatch(receiveStep(step))
    )
);

export const deleteStep = step => dispatch => (
  StepAPIUtil.deleteStep(step).then(step => removeStep(step))
);
