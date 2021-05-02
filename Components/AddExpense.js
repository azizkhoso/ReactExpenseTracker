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
      <div className="w3-section w3-cell-row">
        <div className="w3-cell w3-half">
          Expense Title:
          <input
            className="w3-input w3-border"
            type="text"
            value={this.state.expenseName}
            onChange={(e) => this.handleNameChange(e)}
            placeholder="Expense Title"
          />
        </div>
        <div className="w3-cell w3-quarter">
          <label>Cost: </label>
          <input
            className="w3-input w3-border"
            type="number"
            value={this.state.costValue}
            onChange={(e) => this.handleCostChange(e)}
            placeholder="Cost"
          />
        </div>
        <br />
        <button
          className="w3-button w3-green w3-quarter"
          type="button"
          onClick={() => this.submitNewExpense()}
        >
          Add
        </button>
      </div>
    );
  }
}
