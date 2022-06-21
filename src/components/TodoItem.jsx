const TodoItem = ({item, index, deleteTodoItem, completeTodoItem, updateTodoItem}) => {
    return (
        <div className="todo-list">
        <li style={{textDecoration: item.isComplete ? "line-through" : ""}}>{item.name}</li>
        <div className="btns">
        <button onClick={() => completeTodoItem(index)}>Selesai</button>
        <button onClick={() => updateTodoItem(index)}>Ubah</button>
        <button onClick={() => deleteTodoItem(index)}>Hapus</button>
        </div>
        </div>
    )}
    export default TodoItem;