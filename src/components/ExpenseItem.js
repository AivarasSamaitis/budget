import { Link, useFetcher } from "react-router-dom";
import { formatCurrency, formatDateToLocaleString, getAllMatchingItems } from "../helpers";

const ExpenseItem = ({ expense }) => {
    const fetcher = useFetcher()

    const budget = getAllMatchingItems({
        category: 'budgets',
        key: 'id',
        value: expense.budgetId
    })[0]
    return ( 
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
            {budget && (
                    <td>
                        <Link
                            to={`/budget/${budget.id}`}
                            style={{"--accent": budget.color}}
                        >
                            {budget.name}
                        </Link>
                    </td>
                )
            }
            <td>
                <fetcher.Form method='post'>
                    <input type="hidden" name="_action" value='deleteExpense' />
                    <input type="hidden" name="expenseId" value={expense.id} />
                    <button type="submit" className="btn btn--warning" aria-label={`Delete ${expense.name} expense`}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
                    </button>
                </fetcher.Form>
            </td>
        </>
     );
}
 
export default ExpenseItem;