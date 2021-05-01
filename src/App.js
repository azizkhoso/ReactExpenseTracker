import React from "react";

import "./styles.css";
import Card from "../Components/Card";
import AddExpense from "../Components/AddExpense";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let newId = this.state.expenses[this.state.expenses.length - 1].id + 1;
    let newExpense = {
      id: newId,
      title: title,
      cost: cost
    };
    this.state.expenses.push(newExpense);
    let newList = this.state.expenses;
    this.setState({
      expenses: newList
    });
    console.dir(this.state.expenses);
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
                  amount="5000"
                  backgroundColor="lightgreen"
                />
              </td>
              <td width="33%">
                <Card
                  cardText="Remaining Balance"
                  amount="3000"
                  backgroundColor="yellow"
                />
              </td>
              <td width="33%">
                <Card
                  cardText="Spent amount"
                  amount="2000"
                  backgroundColor="lightblue"
                />
              </td>
            </tr>
            <tr id="addExpenses">
              <td colSpan="3">
                <AddExpense addNewExpense={this.addNewExpense} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
