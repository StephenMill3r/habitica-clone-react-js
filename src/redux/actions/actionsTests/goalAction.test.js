import {
	setDeleteGoalTask,
	setGoalChangeCategoryTask,
	setGoalChangeTask,
	setGoalItems,
	setGoalSuccessTask,
} from '../toDo';
import {goalActionsType} from '../../typesRedux/toDo';

describe('toDo actions', () => {
	it('setGoalItems(): should create an action to set toDo items', () => {
		const expectedAction = {
			type: goalActionsType.SET_GOAL_ITEMS,
			payload: {
				id: 999,
				titleText: 'TEST',
				category: 'active',
				isCompletedTask: false,
				diff: 1,
			},
		};
		expect(
			setGoalItems({
				id: 999,
				titleText: 'TEST',
				category: 'active',
				isCompletedTask: false,
				diff: 1,
			}),
		).toEqual(expectedAction);
	});

	it('setGoalSuccessTask(): should create an action to set success flag on task', () => {
		const expectedAction = {
			type: goalActionsType.SET_GOAL_SUCCESS_TASK,
			payload: 1,
		};
		expect(setGoalSuccessTask(1)).toEqual(expectedAction);
	});

	it('setGoalChangeTask(): should create an action to set change toDo task', () => {
		const expectedAction = {
			type: goalActionsType.SET_GOAL_CHANGE_TASK,
			id: 999,
			titleText: 'TEST',
			supText: 'TEST TEXT',
			diff: 4,
			remainDay: 11,
		};
		expect(setGoalChangeTask(999, 'TEST', 'TEST TEXT', 4, 11)).toEqual(expectedAction);
	});

	it('setDeleteGoalTask(): should create an action to delete task', () => {
		const expectedAction = {
			type: goalActionsType.SET_DELETE_GOAL_TASK,
			payload: 1,
		};
		expect(setDeleteGoalTask(1)).toEqual(expectedAction);
	});

	it('setGoalChangeCategoryTask(): should create an action to change catgory task', () => {
		const expectedAction = {
			type: goalActionsType.SET_GOAL_CHANGE_CATEGORY,
			id: 1,
			category: 'date',
		};
		expect(setGoalChangeCategoryTask(1, 'date')).toEqual(expectedAction);
	});
});
