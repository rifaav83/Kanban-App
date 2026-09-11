import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {

    const { addTask } = useContext(TaskContext);

    const [title, setTitle] = useState("");

    const [status, setStatus] = useState("todo");



    const handleSubmit = (event) => {

        event.preventDefault();

        if (title.trim() === "") {
            return;
        }

        addTask(
            title.trim(),
            status
        );

        setTitle("");

        setStatus("todo");

    };  


    
    
    

    return (
            
    
        
        <form
            className="task-form"
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                placeholder="Enter task..."
                value={title}
                onChange={(event) =>
                    setTitle(event.target.value)
                }
            />


            <select
                value={status}
                onChange={(event) =>
                    setStatus(event.target.value)
                }
            >

                <option value="todo">
                    To Do
                </option>

                <option value="inprogress">
                    In Progress
                </option>

                <option value="done">
                    Done
                </option>

            </select>


            <button type="submit">
                + Add Task
            </button>
   
        </form>

    


    );
}

export default TaskForm;