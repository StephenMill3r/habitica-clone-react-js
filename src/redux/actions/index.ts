/* eslint-disable import/no-anonymous-default-export */
import * as userActionCreators from './user';
import * as habitTaskActionCreators from './habitTask';
import * as dailyTaskActionCreators from './dailyTask';
import * as goalTaskActionCreators from './goal';
import * as rewardTaskActionCreators from './reward';

export default {
  ...userActionCreators,
  ...habitTaskActionCreators,
  ...dailyTaskActionCreators,
  ...goalTaskActionCreators,
  ...rewardTaskActionCreators,
};
