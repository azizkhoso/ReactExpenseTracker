import React from "react";

export default class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseName: "",
      costValue: 0
    };
  }
  handleNameChange = (e) => {
    //this.state.expenseName = e.target.value;
    this.setState({
      expenseName: e.target.value
    });
  };
  handleCostChange = (e) => {
    //this.state.costValue = e.target.value;
    this.setState({
      costValue: Number.parseInt(e.target.value)
    });
  };
  submitNewExpense = () => {
    let { expenseName, costValue } = this.state;
    this.props.addNewExpense({
      title: expenseName,
      cost: costValue
    });
  };
  render() {
    return (
      <div width="100%">
        <label width="20%">Expense Title: </label>
        <input
          type="text"
          value={this.state.expenseName}
          onChange={(e) => this.handleNameChange(e)}
          placeholder="Expense Title"
          width="20%"
        />
        <label width="20%">Cost: </label>
        <input
          type="number"
          value={this.state.costValue}
          onChange={(e) => this.handleCostChange(e)}
          placeholder="Cost"
          width="20%"
        />
        <button
          width="20%"
          type="button"
          onClick={() => this.submitNewExpense()}
        >
          Add
        </button>
      </div>
    );
  }
}
