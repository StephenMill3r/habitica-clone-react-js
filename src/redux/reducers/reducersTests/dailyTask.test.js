import { setDailyDefaultTask, setDailyItems, setDailySuccessTask } from '../../actions/dailyTask';
import { dailyTask } from '../dailyTask';

let initialState = {
  items: [
    {
      id: 0,
      category: 'active',
      titleText: 'Поработать над творческим проектом',
      supText: 'Нажмите, чтобы указать название вашего текущего проекта и задать расписание!',
      isCompletedTask: false,
      count: 0,
      exp: 10,
      health: 7,
    },
  ],
};

describe('daily task reducer', () => {
  it('new task should be added', () => {
    //test data
    let action = setDailyItems({
      id: 999,
      titleText: 'TEST TASK',
      count: 0,
      category: 'active',
      isCompletedTask: false,
      exp: 10,
      health: 7,
    });
    //action
    let newState = dailyTask(initialState, action);

    //expectation
    expect(newState.items.length).toBe(2);
  });

  it('titleText of new task should be correct', () => {
    //test data
    let action = setDailyItems({
      titleText: 'TEST TASK',
    });

    //action
    let newState = dailyTask(initialState, action);

    //expectation
    expect(newState.items[1].titleText).toBe('TEST TASK');
  });

  it('isCompletedTask of task should be true, after user clicks on the checkbox', () => {
    //test data
    let action = setDailySuccessTask(0);

    //action
    let newState = dailyTask(initialState, action);

    //expectation
    expect(newState.items[0].isCompletedTask).toBe(true);
  });

  it('category of task should be other, after user clicks on the checkbox', () => {
    //test data
    let action = setDailySuccessTask(0);

    //action
    let newState = dailyTask(initialState, action);

    //expectation
    expect(newState.items[0].category).toBe('other');
  });

  it('count of task should be increment, after user clicks on the checkbox', () => {
    //test data
    let action = setDailySuccessTask(0);

    //action
    let newState = dailyTask(initialState, action);

    //expectation
    expect(newState.items[0].count).toBe(1);
  });

  it('category of task should be active, after user clicks on the checkbox for the second time', () => {
    //test data
    let action = setDailyDefaultTask(0);

    //action
    let newState = dailyTask(initialState, action);

    //expectation
    expect(newState.items[0].category).toBe('active');
  });

  it('isCompletedTask of task should be false, after user clicks on the checkbox for the second time', () => {
    //test data
    let action = setDailyDefaultTask(0);

    //action
    let newState = dailyTask(initialState, action);

    //expectation
    expect(newState.items[0].isCompletedTask).toBe(false);
  });

  it('count of task should be decrement, after user clicks on the checkbox for the second time', () => {
    //test data
    let action = setDailyDefaultTask(0);

    //action
    let newState = dailyTask(initialState, action);

    //expectation
    expect(newState.items[0].count).toBe(-1);
  });
});
