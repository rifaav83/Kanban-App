import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();


function TaskProvider({ children }) {

    const [tasks, setTasks] = useState(() => {

        const savedTasks = localStorage.getItem("kanbanTasks");

        return savedTasks
            ? JSON.parse(savedTasks)
            : [];
    });


    
    useEffect(() => {

        localStorage.setItem(
            "kanbanTasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);


    
    const addTask = (title, status = "todo") => {

        const newTask = {
            id: Date.now().toString(),
            title: title,
            status: status
        };

        setTasks(prevTasks => [
            ...prevTasks,
            newTask
        ]);
    };


    
    const deleteTask = (id) => {

        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== id)
        );
    };


    
    const updateTask = (id, title) => {

        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id
                    ? {
                        ...task,
                        title: title
                    }
                    : task
            )
        );
    };


    
    const moveTask = (id, newStatus) => {

        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id
                    ? {
                        ...task,
                        status: newStatus
                    }
                    : task
            )
        );
    };


    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                deleteTask,
                updateTask,
                moveTask
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;