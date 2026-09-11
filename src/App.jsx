
import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/kanbanBoard";

function App() {

    

    return (
        <div className="app">
     
            <h1>
                Kanban App
            </h1>
                  <div className="kanban-container">
                      <TaskForm />
                      <KanbanBoard />
             </div>

        </div>
    );
}

export default App;  



