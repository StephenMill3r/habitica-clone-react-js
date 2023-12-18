import {
	setDeleteHabitTask,
	setHabitChangeTask,
	setHabitItems,
	setHabitSuccessTask,
	setMinusHabitCount,
	setPlusHabitCount,
} from '../../../widgets/habitTasks/model/actions/habitTask';
import {habitTask} from '../../../widgets/habitTasks/model/reducers/habitTask';

let initialState = {
	items: [
		{
			id: 1,
			category: 'weak',
			titleText: 'Плохая привычка',
			supText: '',
			isBadTask: true,
			isSucsessTask: false,
			count: 0,
			diff: 1,
		},
		{
			id: 2,
			category: 'weak',
			titleText: 'Проверить почту',
			isBadTask: false,
			isSucsessTask: false,
			count: 0,
			supText: '',
			diff: 1,
		},
	],
};

describe('habit task reducer', () => {
	it('new task should be added', () => {
		//test data
		let action = setHabitItems({
			id: 999,
			category: 'weak',
			titleText: 'TEST TASK',
			count: 0,
			diff: 1,
		});
		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items.length).toBe(3);
	});

	it('titleText of new task should be correct', () => {
		//test data
		let action = setHabitItems({
			titleText: 'TEST TASK',
		});

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[2].titleText).toBe('TEST TASK');
	});

	it('isSucsessTask of task should be true, after user clicks on the checkbox', () => {
		//test data
		let action = setHabitSuccessTask(1);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[0].isSucsessTask).toBe(true);
	});

	it('category of task should be strong, after user clicks on the checkbox', () => {
		//test data
		let action = setHabitSuccessTask(1);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[0].category).toBe('strong');
	});

	it('count of task should be increment, after user clicks on the checkbox', () => {
		//test data
		let action = setPlusHabitCount(1);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[0].count).toBe(1);
	});

	it('count of task should be decrement, after user clicks on the checkbox', () => {
		//test data
		let action = setMinusHabitCount(1);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[0].count).toBe(-1);
	});

	it('titleText of task should be changed, after user edited it in the tab', () => {
		//test data
		let action = setHabitChangeTask(1, false, 'TEST TASK', 'TEST SUPTEXT', 4, false);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[0].titleText).toBe('TEST TASK');
	});

	it('isBadTask of task should be changed, after user edited it in the tab', () => {
		//test data
		let action = setHabitChangeTask(1, true, 'TEST TASK', 'TEST SUPTEXT', 4, false);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[0].isBadTask).toBe(true);
	});

	it('supText of task should be changed, after user edited it in the tab', () => {
		//test data
		let action = setHabitChangeTask(1, false, 'TEST TASK', 'TEST SUPTEXT', 4, false);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[0].supText).toBe('TEST SUPTEXT');
	});
	it('difficulty of task should be changed, after user edited it in the tab', () => {
		//test data
		let action = setHabitChangeTask(1, false, 'TEST TASK', 'TEST SUPTEXT', 4, false);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[0].diff).toBe(5);
	});
	it('isSucsessTask of task should be changed, after user edited it in the tab', () => {
		//test data
		let action = setHabitChangeTask(1, false, 'TEST TASK', 'TEST SUPTEXT', 4, true);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items[0].isSucsessTask).toBe(true);
	});

	it('after deleting length of toDo tasks should be decrement', () => {
		//test data
		let action = setDeleteHabitTask(1);

		//action
		let newState = habitTask(initialState, action);

		//expectation
		expect(newState.items.length).toBe(1);
	});
});
