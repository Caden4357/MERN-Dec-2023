import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Form = (props) => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        // navigate('/dynamic/'+firstName)
        // Instead I like to use backticks
        navigate(`/dynamic/${firstName}`)
    }
    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h2>FORM</h2>
            <form onSubmit={submitHandler}>
                <input type="text"  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
)}

export default Form;