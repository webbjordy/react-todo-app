var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist;
  });

  it('should call onAddTodo if valid string entered', () => {
  var spy = expect.createSpy();
  var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
  var $el = $(ReactDOM.findDOMNode(addTodo));

  addTodo.refs.todoText.value = 'test';
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toHaveBeenCalledWith('test');
});

it('should not call onAddTodo if empty string', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled;
  });

});
