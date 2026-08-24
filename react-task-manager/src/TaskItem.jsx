function TaskItem(props) {
  return (
    <li
      style={{
        textDecoration: props.task.completed ? "line-through" : "none",
      }}
    >
      {props.task.text}

      <button onClick={() => props.onToggle(props.index)}>
        {props.task.completed ? "Undo" : "Complete"}
      </button>

      {props.isEditing ? (
        <button onClick={props.onSave}>Save</button>
      ) : (
        <button onClick={() => props.onEdit(props.index)}>
          Edit
        </button>
      )}

      <button onClick={() => props.onDelete(props.index)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;