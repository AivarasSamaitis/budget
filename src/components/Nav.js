import { Form, NavLink } from "react-router-dom";
import logomark from '../assets/logomark.svg';

const Nav = ({userName}) => {
    return ( 
        <nav>
            <NavLink to='/' aria-label='Go to home'>
                <img src={logomark} alt="" height={30} />
                <span>HomeBudget</span>
            </NavLink>
            {userName && (
                <Form method='post' action='logout'
                    onSubmit={(event) => {
                        if (!window.confirm('Delete user and all data?')) {
                            event.preventDefault()
                        }
                    }}
                >
                    <button type="submit" className="btn btn--warning">
                        <span>Delete user</span> <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
                    </button>

                </Form>
                )
            }
        </nav>
     );
}
 
export default Nav;