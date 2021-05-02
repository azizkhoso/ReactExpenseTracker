export default function ExpensesList(props) {
  return (
    <>
      {props.list.map((expense) => {
        return (
          <tr>
            <td>{expense.title}</td>
            <td>{expense.cost}</td>
            <td>
              <button
                type="button"
                onClick={() => props.removeExpense(expense.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
