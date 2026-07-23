import { Draggable } from "@hello-pangea/dnd";
import { GripVertical, Trash2 } from "lucide-react";

export default function TaskBox({
  taskId,
  index,
  text,
  deleteTask,
  completeTask,
  isCompleted,
}) {
  function handleCheckboxChange() {
    completeTask(taskId);
  }

  function renderTaskBox({
    dragHandleProps,
    draggableProps,
    innerRef,
    isDragging,
  } = {}) {
    return (
      <div
        ref={innerRef}
        {...draggableProps}
        className={`bg-gray-900 border-2 border-gray-700 rounded-xl p-4 mx-4 mb-2 flex items-center justify-between pl-5 ${
          isDragging ? "shadow-lg ring-2 ring-blue-500/40" : ""
        }`}
      >
        {/* Left side: Drag Handle, Checkbox and Task Text */}
        <div className="flex items-center gap-4 min-w-0 flex-1">
          {dragHandleProps ? (
            <button
              type="button"
              {...dragHandleProps}
              className="text-gray-500 hover:text-gray-300 transition-colors cursor-grab active:cursor-grabbing"
              aria-label="Drag task to reorder"
            >
              <GripVertical size={18} />
            </button>
          ) : null}

          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
            className="
                appearance-none relative w-5 h-5 border-2 border-gray-500 rounded-full cursor-pointer transition-all
                checked:bg-green-500 checked:border-green-500 
                after:content-[''] after:absolute after:hidden checked:after:block 
                after:w-1.5 after:h-2.5 after:border-white after:border-r-2 after:border-b-2 after:rotate-45 
                after:left-[5.3px] after:top-[2.3px]
            "
          />
          <span
            className={`text-xl truncate ${isCompleted ? "text-gray-500 line-through" : "text-gray-300"}`}
          >
            {text}
          </span>
        </div>

        {/* Right side: Delete Button */}
        <button
          className="delete-task text-gray-500 hover:text-red-500 transition-colors duration-200 scale-75 hover:scale-85 cursor-pointer mr-2"
          onClick={() => deleteTask(taskId)}
        >
          <Trash2 />
        </button>
      </div>
    );
  }

  if (typeof index === "number") {
    return (
      <Draggable draggableId={String(taskId)} index={index}>
        {(provided, snapshot) =>
          renderTaskBox({
            dragHandleProps: provided.dragHandleProps,
            draggableProps: provided.draggableProps,
            innerRef: provided.innerRef,
            isDragging: snapshot.isDragging,
          })
        }
      </Draggable>
    );
  }

  return renderTaskBox();
}
