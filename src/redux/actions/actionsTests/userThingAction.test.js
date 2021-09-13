import { setUserThing } from '../userThing';
import { userThingActionsType } from '../../typesRedux/userThing';

describe('userThing actions', () => {
  it('setUserThing(): should create an action to increment user level point', () => {
    const expectedAction = {
      type: userThingActionsType.SET_USER_THING,
      payload: { category: 'TEST', name: 'TEST NAME', price: 10, img: 'TEST PATH' },
    };
    expect(
      setUserThing({ category: 'TEST', name: 'TEST NAME', price: 10, img: 'TEST PATH' }),
    ).toEqual(expectedAction);
  });
});
