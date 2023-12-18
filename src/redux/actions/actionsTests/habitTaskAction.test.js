import {
	setDeleteHabitTask,
	setHabitChangeTask,
	setHabitItems,
	setHabitSuccessTask,
	setMinusHabitCount,
	setPlusHabitCount,
} from '../../../widgets/habitTasks/model/actions/habitTask';
import {habitActionsType} from '../../../entities/habitTask/model/types/habitTask';

describe('habitTask actions', () => {
	it('setHabitItems(): should create an action to set habit items', () => {
		const expectedAction = {
			type: habitActionsType.SET_HABIT_ITEMS,
			payload: {
				id: 999,
				category: 'weak',
				titleText: 'TEST',
				count: 0,
				diff: 1,
			},
		};
		expect(
			setHabitItems({
				id: 999,
				category: 'weak',
				titleText: 'TEST',
				count: 0,
				diff: 1,
			}),
		).toEqual(expectedAction);
	});

	it('setHabitSuccessTask(): should create an action to set success flag on task', () => {
		const expectedAction = {
			type: habitActionsType.SET_HABIT_SUCCESS_TASK,
			payload: 1,
		};
		expect(setHabitSuccessTask(1)).toEqual(expectedAction);
	});
	it('setPlusHabitCount(): should create an action to increment habit count', () => {
		const expectedAction = {
			type: habitActionsType.SET_PLUS_HABIT_COUNT,
			payload: 1,
		};
		expect(setPlusHabitCount(1)).toEqual(expectedAction);
	});
	it('setMinusHabitCount(): should create an action to decrement habit count', () => {
		const expectedAction = {
			type: habitActionsType.SET_MINUS_HABIT_COUNT,
			payload: 1,
		};
		expect(setMinusHabitCount(1)).toEqual(expectedAction);
	});
	it('setHabitChangeTask(): should create an action to set change habit task', () => {
		const expectedAction = {
			type: habitActionsType.SET_HABIT_CHANGE_TASK,
			id: 999,
			isBadTask: false,
			titleText: 'TEST',
			supText: 'TEST TEXT',
			diff: 4,
			isSucsessTask: false,
		};
		expect(setHabitChangeTask(999, false, 'TEST', 'TEST TEXT', 4, false)).toEqual(expectedAction);
	});
	it('setDeleteHabitTask(): should create an action to delete task', () => {
		const expectedAction = {
			type: habitActionsType.SET_DELETE_HABIT_TASK,
			payload: 1,
		};
		expect(setDeleteHabitTask(1)).toEqual(expectedAction);
	});
});
