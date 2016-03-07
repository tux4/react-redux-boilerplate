import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../src/constants/ActionTypes';
import counter from '../../src/reducers/counter';

import expect from 'expect';

describe('counter reducers', function() {
  it('Adds 1 on INCREMENT_COUNTER action', function() {
    const action = {
      type: INCREMENT_COUNTER
    };
    let state = counter(0, action);
    expect(state).toBe(1);
  });

  it('Substracts 1 on DECREMENT_COUNTER', function() {
    const action = {
      type: DECREMENT_COUNTER
    };
    let state = counter(5, action);
    expect(state).toBe(4);
  });
});

