import { setRewardItems, setRewardChangeTask, setDeleteRewardTask } from '../reward';
import { rewardActionsType } from '../../typesRedux/reward';

describe('reward actions', () => {
  it('setRewardItems(): should create an action to set reward items', () => {
    const expectedAction = {
      type: rewardActionsType.SET_REWARD_ITEMS,
      payload: {
        id: 999,
        titleText: 'TEST',
        category: 'season',
        cost: 10,
      },
    };
    expect(
      setRewardItems({
        id: 999,
        titleText: 'TEST',
        category: 'season',
        cost: 10,
      }),
    ).toEqual(expectedAction);
  });
  it('setRewardChangeTask(): should create an action to set change reward task', () => {
    const expectedAction = {
      type: rewardActionsType.SET_REWARD_CHANGE_TASK,
      id: 999,
      titleText: 'TEST',
      supText: 'TEST TEXT',
      cost: 10,
    };
    expect(setRewardChangeTask(999, 'TEST', 'TEST TEXT', 10)).toEqual(expectedAction);
  });
  it('setDeleteRewardTask(): should create an action to delete task', () => {
    const expectedAction = {
      type: rewardActionsType.SET_DELETE_REWARD_TASK,
      payload: 1,
    };
    expect(setDeleteRewardTask(1)).toEqual(expectedAction);
  });
});
