export default function ExpensesList(props) {
  return (
    <table className="w3-table-all w3-hoverable">
      <tr>
        <th>Expense Title</th>
        <th>{"Cost($)"}</th>
        <th>Remove</th>
      </tr>
      {props.list.map((expense) => {
        return (
          <tr>
            <td>{expense.title}</td>
            <td>{expense.cost}</td>
            <td>
              <button
                className="w3-button w3-red"
                type="button"
                onClick={() => props.removeExpense(expense.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
