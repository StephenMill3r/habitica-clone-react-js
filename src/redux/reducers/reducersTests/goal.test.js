import {
  setDeleteGoalTask,
  setGoalChangeCategoryTask,
  setGoalChangeTask,
  setGoalItems,
  setGoalSuccessTask,
} from '../../actions/goal';
import { goal } from '../goal';

let initialState = {
  items: [
    {
      id: 0,
      category: 'active',
      titleText: 'Растяжка > Ежедневная тренировка',
      supText: '',
      isCompletedTask: false,
      diff: 1,
      remainDay: 0,
    },
  ],
};

describe('goal task reducer', () => {
  it('new task should be added', () => {
    //test data
    let action = setGoalItems({
      id: 999,
      titleText: 'TEST TASK',
      category: 'active',
      isCompletedTask: false,
      diff: 1,
    });
    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items.length).toBe(2);
  });
  it('titleText of new task should be correct', () => {
    //test data
    let action = setGoalItems({
      titleText: 'TEST TASK',
    });

    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items[1].titleText).toBe('TEST TASK');
  });

  it('isCompletedTask of task should be true, after user clicks on the checkbox', () => {
    //test data
    let action = setGoalSuccessTask(0);

    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items[0].isCompletedTask).toBe(true);
  });

  it('category of task should be completed, after user clicks on the checkbox', () => {
    //test data
    let action = setGoalSuccessTask(0);

    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items[0].category).toBe('completed');
  });

  it('titleText of task should be changed, after user edited it in the tab', () => {
    //test data
    let action = setGoalChangeTask(0, 'TEST TASK', 'TEST SUPTEXT', 1, 1);

    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items[0].titleText).toBe('TEST TASK');
  });

  it('supText of task should be changed, after user edited it in the tab', () => {
    //test data
    let action = setGoalChangeTask(0, 'TEST TASK', 'TEST SUPTEXT', 1, 1);

    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items[0].supText).toBe('TEST SUPTEXT');
  });

  it('difficulty of task should be changed, after user edited it in the tab', () => {
    //test data
    let action = setGoalChangeTask(0, 'TEST TASK', 'TEST SUPTEXT', 4, 1);

    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items[0].diff).toBe(5);
  });

  it('remainDay of task should be changed, after user edited it in the tab', () => {
    //test data
    let action = setGoalChangeTask(0, 'TEST TASK', 'TEST SUPTEXT', 4, 9);

    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items[0].remainDay).toBe(9);
  });

  it('after deleting length of goal tasks should be decrement', () => {
    //test data
    let action = setDeleteGoalTask(0);

    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items.length).toBe(0);
  });

  it('category of task should be changed, after user set date it in the tab', () => {
    //test data
    let action = setGoalChangeCategoryTask(0, 'date');

    //action
    let newState = goal(initialState, action);

    //expectation
    expect(newState.items[0].category).toBe('date');
  });
});
