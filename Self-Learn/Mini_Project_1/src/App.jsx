import { useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/InputBox.jsx";
import TaskBox from "./components/TaskBox.jsx";
import CompletedTasks from "./components/CompletedTasks.jsx";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
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
