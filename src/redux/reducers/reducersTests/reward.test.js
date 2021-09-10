import { setDeleteRewardTask, setRewardChangeTask, setRewardItems } from '../../actions/reward';
import { reward } from '../reward';

let initialState = {
  items: [
    {
      id: 0,
      titleText: 'Награди себя',
      supText: 'Смотрите телевизор,играйте в игры, кушайте вкусняшки,вам решать!',
      cost: 10,
      category: 'season',
    },
  ],
};

describe('reward task reducer', () => {
  it('new task should be added', () => {
    //test data
    let action = setRewardItems({
      id: 999,
      titleText: 'TEST TASK',
      category: 'season',
      cost: 10,
    });
    //action
    let newState = reward(initialState, action);

    //expectation
    expect(newState.items.length).toBe(2);
  });

  it('titleText of new task should be correct', () => {
    //test data
    let action = setRewardItems({
      titleText: 'TEST TASK',
    });

    //action
    let newState = reward(initialState, action);

    //expectation
    expect(newState.items[1].titleText).toBe('TEST TASK');
  });

  it('titleText of task should be changed, after user edited it in the tab', () => {
    //test data
    let action = setRewardChangeTask(0, 'TEST TASK', 'TEST SUPTEXT', 10);

    //action
    let newState = reward(initialState, action);

    //expectation
    expect(newState.items[0].titleText).toBe('TEST TASK');
  });

  it('supText of task should be changed, after user edited it in the tab', () => {
    //test data
    let action = setRewardChangeTask(0, 'TEST TASK', 'TEST SUPTEXT', 10);

    //action
    let newState = reward(initialState, action);

    //expectation
    expect(newState.items[0].supText).toBe('TEST SUPTEXT');
  });

  it('cost of task should be changed, after user edited it in the tab', () => {
    //test data
    let action = setRewardChangeTask(0, 'TEST TASK', 'TEST SUPTEXT', 10);

    //action
    let newState = reward(initialState, action);

    //expectation
    expect(newState.items[0].cost).toBe(10);
  });

  it('after deleting length of goal tasks should be decrement', () => {
    //test data
    let action = setDeleteRewardTask(0);

    //action
    let newState = reward(initialState, action);

    //expectation
    expect(newState.items.length).toBe(0);
  });
});
