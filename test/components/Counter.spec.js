import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import Counter from '../../src/components/Counter';
import ReactTestUtils, { Simulate } from 'react-addons-test-utils';
import jsdom from 'mocha-jsdom';
import sinon from 'sinon';

describe('Counter', () => {
  jsdom();

  let container;
  let counterProps = {
    increment: sinon.spy(),
    decrement: sinon.spy(),
    counter: 1
  }

  before(() => {
    container = document.createElement('div');
    container.id = "counter-mount";
    ReactDom.render(<Counter { ...counterProps }/>, container);
  });

  it('should render correctly', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Counter />);
    const output = renderer.getRenderOutput();
    expect(output.type).toBe('p');
  });

  it('increment button click calls increment', () => {
    var incrementButton = container.querySelectorAll('button')[0];
    Simulate.click(incrementButton);
    expect(counterProps.increment.called).toBe(true);
  });

  it('decrement button click calls decrement', () => {
    var decrementButton = container.querySelectorAll('button')[1];
    Simulate.click(decrementButton);
    expect(counterProps.decrement.called).toBe(true);
  });
});
