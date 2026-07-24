import { Plus } from "lucide-react";

export default function InputBox({ onAddTask }) {
  function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
      // Call the function to add the task here
      console.log("Enter key pressed. Task added to list.");
      if (event.target.value.trim() === "") {
        console.log("Input is empty. Task not added.");
        event.target.value = ""; // Clear the input field
        return; // Do not add empty tasks
      }
      onAddTask(event.target.value);
      event.target.value = ""; // Clear the input field
    }
  }

  return (
    <div className="relative input-box m-4 mb-10 text-xl">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
        <Plus size={22} />
      </div>

      <input
        className="input-field bg-gray-800 border-2 border-gray-700 rounded-xl p-4 lg:p-5 focus:border-red-400 w-full outline-none transition-colors duration-200 pl-13 cursor-pointer focus:cursor-text text-gray-400"
        type="text"
        placeholder="Add a Task... Press [Enter] to save"
        onKeyDown={handleEnterKeyPress}
      />
    </div>
  );
}
