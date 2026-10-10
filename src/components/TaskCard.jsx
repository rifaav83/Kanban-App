import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {

    const { deleteTask, updateTask } = useContext(TaskContext);

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    

    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", task.id);
        e.dataTransfer.effectAllowed = "move";
    };


    
    const handleSave = () => {

        if (editedTitle.trim() === "") {
            return;
        }

        updateTask(
            task.id,
            editedTitle.trim()
        );

        setIsEditing(false);

        
    };


    return (
        <div
   
        

            className="task-card"
            draggable={!isEditing}
            onDragStart={handleDragStart}
        >

            {isEditing ? (

                <div className="edit-area">

                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) =>
                            setEditedTitle(e.target.value)
                        }
                        autoFocus
                    />

                    <div className="edit-buttons">

                        

                        <button
                            className="save-btn"
                            onClick={handleSave}
                        >
                            Save
                        </button>

                        <button
                            className="cancel-btn"
                            onClick={() => {
                                setEditedTitle(task.title);
                                setIsEditing(false);
                            }}
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            ) : (

                <>
                    <div className="drag-handle">
                        *
                    </div>

                    <div className="task-content">
                        <span>
                            {task.title}
                        </span>
                    </div>

                    <div className="task-actions">
                        
                        <button
                            className="edit-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsEditing(true);
                            }}
                            title="Edit task"
                        >
                            Edit
                        </button>   
                        <button
                            className="delete-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteTask(task.id);
                            }}
                            title="Delete task"
                        >
                            Delete
                        </button>

                    </div>
                </>
              )}
            
        </div>
    );
}
export default TaskCard;   
