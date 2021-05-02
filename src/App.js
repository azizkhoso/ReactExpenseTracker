import React from "react";

import "./styles.css";
import Card from "../Components/Card";
import AddExpense from "../Components/AddExpense";
import ExpensesList from "../Components/ExpensesList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalBalance: 5000,
      totalSpent: 50,
      remainingBalance: 4950,
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
      <div className="App">
        <table width="100%">
          <h1 width="100%">Expense Tracker</h1>
          <tbody>
            <tr id="cards">
              <td width="33%">
                <Card
                  cardText="Total Balance"
                  amount={this.state.totalBalance}
                  backgroundColor="lightgreen"
                />
              </td>
              <td width="33%">
                <Card
                  cardText="Remaining Balance"
                  amount={this.state.remainingBalance}
                  backgroundColor="yellow"
                />
              </td>
              <td width="33%">
                <Card
                  cardText="Spent amount"
                  amount={this.state.totalSpent}
                  backgroundColor="lightblue"
                />
              </td>
            </tr>

            <tr id="addBalance">
              <td>Total Balance</td>
              <td colSpan="2">
                <input
                  type="number"
                  value={this.state.totalBalance}
                  onChange={(e) => this.handleBalanceChange(e)}
                />
              </td>
            </tr>
            <tr id="addExpenses" width="100%">
              <td colSpan="3">
                <AddExpense addNewExpense={this.addNewExpense} />
              </td>
            </tr>
            <tr>
              <td>Expense Title</td>
              <td>{"Cost($)"}</td>
              <td>Remove</td>
            </tr>
            <ExpensesList
              list={this.state.expenses}
              removeExpense={this.removeExpense}
            />
          </tbody>
        </table>
      </div>
    );
  }
}
