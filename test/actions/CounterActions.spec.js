import expect from 'expect';
import * as actions from '../../src/actions/CounterActions';
import * as types from '../../src/constants/ActionTypes';

describe('CounterActions', function() {
  it('should create INCREMENT_COUNTER action', function() {
    const expectedAction = {
      type: 'INCREMENT_COUNTER'
    };
    expect(actions.increment()).toEqual(expectedAction);
  });

  it('should create DECREMENT_COUNTER action', function() {
    const expectedAction = {
      type: 'DECREMENT_COUNTER'
    };
    expect(actions.decrement()).toEqual(expectedAction);
  });
});
