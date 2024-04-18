import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
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
            <h2 className="h3">Create budget</h2>
            <fetcher.Form method='post' className="grid-sm" ref={formRef}>
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget name</label>
                    <input type="text" name='newBudget' id='newBudget' placeholder="e.g., Groceries" required ref={focusRef} />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input type="number" step='0.01' name='newBudgetAmount' id='newBudgetAmount' placeholder="e.g., 350 €" required inputMode="decimal" />
                </div>
                <input type="hidden" name="_action" value="createBudget" />
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting...</span> : (
                            <>
                                <span>Create budget</span>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.464,6c1.43,0,2.779,0.613,3.799,1.726l1.475-1.352C17.334,4.843,15.461,4,13.464,4c-1.998,0-3.87,0.843-5.272,2.375 C7.491,7.139,6.951,8.031,6.589,9H4v2h2.114c-0.038,0.33-0.064,0.663-0.064,1s0.026,0.67,0.064,1H4v2h2.589 c0.362,0.97,0.901,1.861,1.603,2.626C9.594,19.157,11.466,20,13.464,20c1.997,0,3.87-0.843,5.273-2.374l-1.475-1.352 C16.243,17.387,14.894,18,13.464,18s-2.778-0.612-3.798-1.726C9.316,15.893,9.041,15.457,8.801,15H13v-2H8.139 c-0.05-0.328-0.089-0.66-0.089-1s0.039-0.672,0.089-1H13V9H8.801c0.24-0.457,0.516-0.893,0.865-1.274 C10.686,6.613,12.034,6,13.464,6z"></path></svg>
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
     );
}
 
export default AddBudgetForm;