import React, { useEffect, useState } from "react";
import axios from "axios";

function Form() {
    const url = 'http://localhost:3004/tasks';
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }


    const handleSubmit = (e) => {
        if (input) {
            
            axios.post(url, {
                "title": input,
                "done" : "false"
            }).then(response => console.log(response.data))
            .catch(err => err.message)
        } return

    }

    useEffect(handleSubmit, [url])
    return <form>
    <input type="text" className="todo-input" onChange={handleChange} />
        <button onClick={handleSubmit}><i className="fas fa-plus-square"></i></button>
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Not Complete</option>
            </select>
        </div>
  </form>;
}

export default Form;
