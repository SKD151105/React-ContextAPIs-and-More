import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox.jsx";
import TaskBox from "./components/TaskBox.jsx";
import CompletedTasks from "./components/CompletedTasks.jsx";

function App() {
  // const [count, setCount] = useState(0)
  // An array of tasks to be displayed in the TaskBox components
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ]);

  function addTask(newTaskText) {
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleCompleteTask(taskId) {
    setTasks(
      tasks.map((task) => {
        // If this is the task we clicked, flip its completed status (true->false, false->true)
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        // Otherwise, leave it exactly as it is
        return task;
      }),
    );
  }

  return (
    <>
      <InputBox onAddTask={addTask} />
      {tasks
        .filter((task) => !task.completed)
        .map((task) => (
          <TaskBox
            key={task.id}
            taskId={task.id}
            text={task.text}
            deleteTask={handleDeleteTask}
            completeTask={handleCompleteTask}
            isCompleted={task.completed}
          />
        ))}
      <CompletedTasks
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
      />
    </>
  );
}

export default App;
