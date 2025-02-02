import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const ADdExpenseForm = ({budgets}) => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === 'submitting'
    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting])

    return ( 
        <div className="form-wrapper">
            <h2 className="h3">Add New{' '}<span className="accent">
                    {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
                </span>{" "}
                Expense
            </h2>
            <fetcher.Form method='post' className="grid-sm" ref={formRef}>
                <div className="expense-inputs">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expense Name</label>
                        <input type="text" name='newExpense' id='newExpense' placeholder="e.g., Coffee" ref={focusRef} required />
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Amount</label>
                        <input type="number" name='newExpenseAmount' id='newExpenseAmount' placeholder="e.g., 3.50 €" inputMode="decimal" step='0.01' required />
                    </div>
                    <div className="grid-xs" hidden={budgets.length === 1}>
                        <label htmlFor="newExpenseBudget">Budget Category</label>
                        <select name="newExpenseBudget" id="newExpenseBudget" required>
                            {
                                budgets
                                    .sort((a, b) => a.createdAt - b.createdAt)
                                    .map((budget) => {
                                        return (
                                            <option key={budget.id} value={budget.id}>{budget.name}</option>
                                        )
                                    })
                            }
                        </select>
                    </div>
                    <input type="hidden" name="_action" value='createExpense' />
                    <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                        {isSubmitting ? <span>Submitting...</span> : (
                            <>
                                <span>Add Expense</span>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                            </>
                        )}
                    </button>
                </div>
            </fetcher.Form>
        </div>
     );
}
 
export default ADdExpenseForm;