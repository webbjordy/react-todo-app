var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var newTodo = this.refs.todoText.value;

    if(newTodo.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(newTodo);
    }
  },
  render: function () {
    return (
      <div>
        <form ref="newTodo" onSubmit={this.onSubmit} className="add-todo">
          <input type="text" ref="todoText" placeholder="Enter what you need to do"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
