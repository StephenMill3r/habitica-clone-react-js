import {
	setIncreaseUserLevel,
	setIncreaseUserLevelPoint,
	setMinusUserHealth,
	setMinusUserLevel,
	setMinusUserMoney,
	setResetUserHealth,
	setResetUserLevel,
	setUserHealth,
	setUserLevel,
	setUserMoney,
} from '../../../entities/user/model/actions/user';
import {userActionsType} from '../../typesRedux/user';

describe('user actions', () => {
	it('setUserLevel(): should create an action to increment user level point', () => {
		const expectedAction = {
			type: userActionsType.SET_USER_LEVEL,
			payload: 1,
		};
		expect(setUserLevel(1)).toEqual(expectedAction);
	});
	it('setMinusUserLevel(): should create an action to decrement user level point', () => {
		const expectedAction = {
			type: userActionsType.SET_MINUS_USER_LEVEL,
			payload: 1,
		};
		expect(setMinusUserLevel(1)).toEqual(expectedAction);
	});
	it('setResetUserLevel(): should create an action to reset user level point', () => {
		const expectedAction = {
			type: userActionsType.SET_RESET_USER_LEVEL,
		};
		expect(setResetUserLevel()).toEqual(expectedAction);
	});
	it('setUserHealth(): should create an action to increment user health', () => {
		const expectedAction = {
			type: userActionsType.SET_USER_HEALTH,
			payload: 1,
		};
		expect(setUserHealth(1)).toEqual(expectedAction);
	});
	it('setMinusUserHealth(): should create an action to decrement user health', () => {
		const expectedAction = {
			type: userActionsType.SET_MINUS_USER_HEALTH,
			payload: 1,
		};
		expect(setMinusUserHealth(1)).toEqual(expectedAction);
	});
	it('setResetUserHealth(): should create an action to reset user health', () => {
		const expectedAction = {
			type: userActionsType.SET_RESET_USER_HEALTH,
		};
		expect(setResetUserHealth()).toEqual(expectedAction);
	});
	it('setUserMoney(): should create an action to increment user money', () => {
		const expectedAction = {
			type: userActionsType.SET_USER_MONEY,
			payload: 1,
		};
		expect(setUserMoney(1)).toEqual(expectedAction);
	});
	it('setMinusUserMoney(): should create an action to decrement user money', () => {
		const expectedAction = {
			type: userActionsType.SET_MINUS_USER_MONEY,
			payload: 1,
		};
		expect(setMinusUserMoney(1)).toEqual(expectedAction);
	});
	it('setIncreaseUserLevelPoint(): should create an action to increment maxLevelPoint', () => {
		const expectedAction = {
			type: userActionsType.SET_INCREASE_USER_LEVEL_POINT,
		};
		expect(setIncreaseUserLevelPoint()).toEqual(expectedAction);
	});
	it('setIncreaseUserLevel(): should create an action to increment user level', () => {
		const expectedAction = {
			type: userActionsType.SET_INCREASE_USER_LEVEL,
		};
		expect(setIncreaseUserLevel()).toEqual(expectedAction);
	});
});
