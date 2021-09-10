import {
  setIncreaseUserLevel,
  setMinusUserHealth,
  setMinusUserLevel,
  setMinusUserMoney,
  setResetUserHealth,
  setResetUserLevel,
  setUserHealth,
  setUserLevel,
  setUserMoney,
} from '../../actions/user';
import { user } from '../user';

let initialState = {
  levelPoint: 0,
  healthPoint: 50,
  level: 1,
  maxLevelPoint: 25,
  maxHealthPoint: 50,
  money: 0,
};

describe('user reducer', () => {
  it('after successful completion of the task, increase the user level points', () => {
    //test data
    let action = setUserLevel(10);

    //action
    let newState = user(initialState, action);

    //expectation
    expect(newState.levelPoint).toBe(10);
  });
  it('after unsuccessful completion of the task, decrement the user level points', () => {
    //test data
    let action = setMinusUserLevel(10);

    //action
    let newState = user(initialState, action);

    //expectation
    expect(newState.levelPoint).toBe(-10);
  });
  it('after reaching a certain number of points reset count of level point', () => {
    //test data
    let action = setResetUserLevel();

    //action
    let newState = user(initialState, action);

    //expectation
    expect(newState.levelPoint).toBe(0);
  });
  it('after successful completion of the task, increase the user health', () => {
    //test data
    let action = setUserHealth(10);

    //action
    let newState = user(initialState, action);

    //expectation
    expect(newState.healthPoint).toBe(60);
  });
  it('after unsuccessful completion of the task, decrement the user health', () => {
    //test data
    let action = setMinusUserHealth(10);

    //action
    let newState = user(initialState, action);

    //expectation
    expect(newState.healthPoint).toBe(40);
  });
  it('after reaching a certain number of health reset count of health point', () => {
    //test data
    let action = setResetUserHealth();

    //action
    let newState = user(initialState, action);

    //expectation
    expect(newState.healthPoint).toBe(50);
  });
  it('after successful completion of the task, increase the user money', () => {
    //test data
    let action = setUserMoney(10);

    //action
    let newState = user(initialState, action);

    //expectation
    expect(newState.money).toBe(10);
  });
  it('after unsuccessful completion of the task, decrement the money', () => {
    //test data
    let action = setMinusUserMoney(10);

    //action
    let newState = user(initialState, action);

    //expectation
    expect(newState.money).toBe(-10);
  });
  it('after reaching a certain number of level point increase level', () => {
    //test data
    let action = setIncreaseUserLevel();

    //action
    let newState = user(initialState, action);

    //expectation
    expect(newState.level).toBe(2);
  });
});
