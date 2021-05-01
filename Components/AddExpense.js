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
      <>
        <input
          type="text"
          value={this.state.expenseName}
          onChange={(e) => this.handleNameChange(e)}
          placeholder="Expense Title"
        />
        <input
          type="number"
          value={this.state.costValue}
          onChange={(e) => this.handleCostChange(e)}
        />
        <button type="button" onClick={() => this.submitNewExpense()}>
          Add
        </button>
      </>
    );
  }
}
