import {addDailyTask, setDailyDefaultTask, setDailySuccessTask} from '../dailyTask';
import {dailyActionsType} from '../../typesRedux/dailyTask';

describe('daily actions', () => {
	it('setDailyItems(): should create an action to set daily items', () => {
		const expectedAction = {
			type: dailyActionsType.SET_DAILY_ITEMS,
			payload: {
				id: 999,
				titleText: 'TEST',
				count: 0,
				category: 'active',
				isCompletedTask: false,
				exp: 10,
				health: 7,
			},
		};
		expect(
			addDailyTask({
				id: 999,
				titleText: 'TEST',
				count: 0,
				category: 'active',
				isCompletedTask: false,
				exp: 10,
				health: 7,
			}),
		).toEqual(expectedAction);
	});

	it('setDailySuccessTask(): should create an action to set success flag on task', () => {
		const expectedAction = {
			type: dailyActionsType.SET_DAILY_SUCCESS_TASK,
			payload: 1,
		};
		expect(setDailySuccessTask(1)).toEqual(expectedAction);
	});

	it('setDailyDefaultTask(): should create an action to set default  task', () => {
		const expectedAction = {
			type: dailyActionsType.SET_DAILY_DEFAULT_TASK,
			payload: 1,
		};
		expect(setDailyDefaultTask(1)).toEqual(expectedAction);
	});
});
