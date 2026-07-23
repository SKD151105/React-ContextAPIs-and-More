import TaskBox from "./TaskBox";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CompletedTasks({
  tasks,
  handleDeleteTask,
  handleCompleteTask,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="completed-tasks-container rounded-xl mt-10">
      <div
        className="flex items-center justify-between pl-6 pr-4 mb-6 cursor-pointer text-gray-400 hover:text-gray-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-xl transition-all duration-300">
          Completed Tasks ({completedTasks.length})
        </h1>

        <ChevronDown
          className={`relative transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="mt-4">
          {completedTasks.length === 0 ? (
            <p className="text-gray-500 pl-6">No completed tasks yet.</p>
          ) : (
            completedTasks.map((task) => (
              <TaskBox
                key={task.id}
                taskId={task.id}
                text={task.text}
                deleteTask={handleDeleteTask}
                completeTask={handleCompleteTask}
                isCompleted={task.completed}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
