import React from "react";
import Column from "./column";

function KanbanBoard() {

    return (
        <div className="kanban-board">

            <Column
                title="To Do"
                status="todo"
                icon="✓"
            />

            <Column
                title="In Progress"
                status="inprogress"
                icon="⏳"
            />

            <Column
                title="Done"
                status="done"
                icon="✓"
            />

        </div>
    );
}

export default KanbanBoard;