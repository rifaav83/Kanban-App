import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard  from "./TaskCard";

function Column({ title, status, icon }) {

    const { tasks, moveTask } = useContext(TaskContext);

    const [isOver, setIsOver] = useState(false);


    const columnTasks = tasks.filter(
        task => task.status === status
    );


    
    const handleDragOver = (e) => {

        e.preventDefault();

        e.dataTransfer.dropEffect = "move";

        setIsOver(true);
    };


    
    const handleDragLeave = (e) => {

         
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOver(false);
        }
    };


    
    const handleDrop = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const taskId = e.dataTransfer.getData("text/plain");

        setIsOver(false);

        if (!taskId) {
            return;
        }

        
        moveTask(taskId, status);
    };
   

       

    return (
        <div
            className={`column ${isOver ? "column-over" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >

        

            <div className="column-header">
            
    

                <div className="column-title">

                    <div className={`column-icon ${status}`}>
                        {icon}
                    </div>

                    <h2>
                        {title}
                    </h2>

                </div>

                <div className="task-count">
                    {columnTasks.length}
                </div>

            </div>


        

            <div className="task-list">

                {columnTasks.length === 0 ? (

                    <div className="empty-column">
                        Drop task here
                    </div>

                ) : (

                    columnTasks.map(task => (
                        <TaskCard
                            key={task.id}
                            task={task}
                        />
                    ))

                )}

            </div>

        </div>
    );
}

export default Column; 