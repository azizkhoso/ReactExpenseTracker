import React from "react";

import "./styles.css";
import Card from "../Components/Card";
import AddExpense from "../Components/AddExpense";
import ExpensesList from "../Components/ExpensesList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalBalance: 500,
      totalSpent: 50,
      remainingBalance: 450,
      expenses: [
        {
          id: 1,
          title: "Bought a book",
          cost: 50
        }
      ]
    };
  }
  addNewExpense = ({ title, cost }) => {
    let newId =
      this.state.expenses.length === 0
        ? 1
        : this.state.expenses[this.state.expenses.length - 1].id + 1;
    let newExpense = {
      id: newId,
      title: title,
      cost: cost
    };
    this.state.expenses.push(newExpense);
    let newTotalSpent = this.state.totalSpent + cost;
    let newRemaining = this.state.remainingBalance - cost;
    let newList = this.state.expenses;
    this.setState({
      expenses: newList,
      totalSpent: newTotalSpent,
      remainingBalance: newRemaining
    });
    //this.handleBalanceChange();
    console.dir(this.state.expenses);
  };
  removeExpense = (id) => {
    let newTotalSpent = this.state.totalSpent;
    let newRemaining = this.state.remainingBalance;
    let newList = this.state.expenses.filter((element) => {
      if (element.id === id) {
        newTotalSpent -= element.cost;
        newRemaining += element.cost;
        return false;
      } else return true;
    });
    this.setState({
      expenses: newList,
      totalSpent: newTotalSpent,
      remainingBalance: newRemaining
    });
  };
  handleBalanceChange = (e) => {
    let newBalance = e.target.value;
    let newRemaining = newBalance - this.state.totalSpent;
    this.setState({
      totalBalance: newBalance,
      remainingBalance: newRemaining
    });
  };
  calculateTotalSpent = () => {
    let { expenses } = this.state;
    let totalSpent = 0;
    expenses.forEach((element) => {
      totalSpent += element.cost;
    });
    return totalSpent;
  };
  calculateRemainingBalance = () => {
    return this.state.totalBalance - this.calculateTotalSpent();
  };
  render() {
    return (
      <div className="w3-container">
        <h1 className="w3-center w3-teal w3-row" width="100%">
          Expense Tracker
        </h1>
        <div className="w3-row w3-section">
          <Card
            cardText="Total Balance"
            amount={this.state.totalBalance}
            backgroundColor="w3-light-green"
          />
          <Card
            cardText="Remaining Balance"
            amount={this.state.remainingBalance}
            backgroundColor="w3-lime"
          />
          <Card
            cardText="Spent amount"
            amount={this.state.totalSpent}
            backgroundColor="w3-orange"
          />
        </div>
        <div className="w3-section w3-row" id="addBalance">
          <div className="w3-col-3">Total Balance</div>
          <div className="w3-rest">
            <input
              className="w3-input w3-border"
              type="number"
              value={this.state.totalBalance}
              onChange={(e) => this.handleBalanceChange(e)}
            />
          </div>
        </div>
        <AddExpense addNewExpense={this.addNewExpense} />
        <ExpensesList
          list={this.state.expenses}
          removeExpense={this.removeExpense}
        />
      </div>
    );
  }
}
