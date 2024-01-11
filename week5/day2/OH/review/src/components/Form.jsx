import React, {useState} from 'react';

const Form = (props) => {
      // form state ie goalTitle, isCompleted
    // props -> {goals, setGoals}
    const {goals, setGoals} = props
    const [goal, setGoal] = useState('')

    const addGoal = (e) => {
        e.preventDefault()
        // Create a goal object with the goal text from the form as well as an isCompleted state set to false
        const newGoal = {
            goal,
            isCompleted:false
        }
        // updated my goals list to include the newGoal 
        setGoals([...goals, newGoal])
    }
    return (
        <div>
            <h2>Add A Goal For 2024</h2>
            <form onSubmit={addGoal}>
                <label>Goal</label>
                <input type="text" onChange={(e) => setGoal(e.target.value)} />
                <button>Add Goal</button>
            </form>
        </div>
)}

export default Form;