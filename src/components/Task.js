import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.name} {" "}
        <p>{task.text}</p>
        <p>{task.time}</p>
        <p>{task.timestampToString}</p>
       
        <FaTimes
          style={{ color: "red", cursor: "pointer", fontSize: "25px"}}
          onClick={() => onDelete(task.id)}
        />
      </h3>
     
     
     </div>
  );
};

export default Task;
