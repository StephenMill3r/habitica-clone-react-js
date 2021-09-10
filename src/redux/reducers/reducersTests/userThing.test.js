import { setUserThing } from '../../actions/userThing';
import { userThing } from '../userThing';

let initialState = {
  items: [],
};

describe('userThing reducer', () => {
  it('new task should be added', () => {
    //test data
    let action = setUserThing({ category: 'Thing', img: 'Img Test', name: 'Name test', price: 10 });
    //action
    let newState = userThing(initialState, action);

    //expectation
    expect(newState.items.length).toBe(1);
  });

  it('category of new task should be correct', () => {
    //test data
    let action = setUserThing({
      category: 'Thing',
    });

    //action
    let newState = userThing(initialState, action);

    //expectation
    expect(newState.items[0].category).toBe('Thing');
  });

  it('img of new task should be correct', () => {
    //test data
    let action = setUserThing({
      img: 'Img Test',
    });

    //action
    let newState = userThing(initialState, action);

    //expectation
    expect(newState.items[0].img).toBe('Img Test');
  });

  it('name of new task should be correct', () => {
    //test data
    let action = setUserThing({
      name: 'Name test',
    });

    //action
    let newState = userThing(initialState, action);

    //expectation
    expect(newState.items[0].name).toBe('Name test');
  });
  it('price of new task should be correct', () => {
    //test data
    let action = setUserThing({
      price: 10,
    });

    //action
    let newState = userThing(initialState, action);

    //expectation
    expect(newState.items[0].price).toBe(10);
  });
});
