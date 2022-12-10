/* eslint-disable import/no-anonymous-default-export */
import * as userActionCreators from './user';
import * as habitTaskActionCreators from './habitTask';
import * as dailyTaskActionCreators from './dailyTask';
import * as goalTaskActionCreators from './toDo';
import * as rewardTaskActionCreators from './reward';
import * as userThingActionCreators from './userThing';

export default {
    ...userActionCreators,
    ...habitTaskActionCreators,
    ...dailyTaskActionCreators,
    ...goalTaskActionCreators,
    ...rewardTaskActionCreators,
    ...userThingActionCreators,
};
