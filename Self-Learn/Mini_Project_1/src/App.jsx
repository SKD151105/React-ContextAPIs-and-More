import { useState, useEffect, useContext } from "react";
import "./App.css";
import InputBox from "./components/InputBox.jsx";
import TaskBox from "./components/TaskBox.jsx";
import CompletedTasks from "./components/CompletedTasks.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const { theme } = useContext(ThemeContext);

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
    <div className={`min-h-screen py-0.5 ${theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-100 text-black"} transition-colors duration-300`}>
      {/* <div className="flex justify-center mb-8">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl font-bold cursor-pointer hover:bg-blue-600 transition-colors"
        >
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div> */}

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
    </div>
  );
}

export default App;
