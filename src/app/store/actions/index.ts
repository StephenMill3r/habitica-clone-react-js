/* eslint-disable import/no-anonymous-default-export */
import * as userActionCreators from '../../../redux/actions/user';
import * as habitTaskActionCreators from '../../../entities/habitTask/model/actions/habitTask';
import * as dailyTaskActionCreators from '../../../redux/actions/dailyTask';
import * as goalTaskActionCreators from '../../../redux/actions/toDo';
import * as rewardTaskActionCreators from '../../../redux/actions/reward';
import * as userThingActionCreators from '../../../redux/actions/userThing';

export default {
    ...userActionCreators,
    ...habitTaskActionCreators,
    ...dailyTaskActionCreators,
    ...goalTaskActionCreators,
    ...rewardTaskActionCreators,
    ...userThingActionCreators,
};
