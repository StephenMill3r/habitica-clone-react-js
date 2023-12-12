/* eslint-disable import/no-anonymous-default-export */
import * as userActionCreators from '../../../entities/user/model/actions/user';
import * as habitTaskActionCreators from '../../../entities/habitTask/model/actions/habitTask';
import * as rewardActionCreators from '../../../entities/reward/model/actions/reward';
import * as dailyTaskActionCreators from '../../../redux/actions/dailyTask';
import * as goalTaskActionCreators from '../../../redux/actions/toDo';
import * as userThingActionCreators from '../../../redux/actions/userThing';

export default {
    ...userActionCreators,
    ...habitTaskActionCreators,
    ...dailyTaskActionCreators,
    ...goalTaskActionCreators,
    ...rewardActionCreators,
    ...userThingActionCreators,
};
