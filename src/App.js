import "./App.css";
import {useState} from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  
  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, todo];
    setTodoItems(newTodoItems);
    console.log([...todoItems]);
    };
  
  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(index, 1)
    setTodoItems(newTodoItems)
    };  

    const completeTodoItem = (index) => {
      const newTodoItems = [...todoItems];
      if (newTodoItems[index].isComplete === false){
        newTodoItems[index].isComplete = true;
      }
      else{
        newTodoItems[index].isComplete = false;
      }
      setTodoItems(newTodoItems)
      };

      const updateTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        const item = newTodoItems[index];
        let newItem = prompt(`Update ${item.name}?`, item.name);
        let todoObj = { name: newItem, complete: false };
        newTodoItems.splice(index, 1, todoObj);
        if (newItem === null || newItem === "") {
        return;
        } else {
        item.name = newItem;
        }
        setTodoItems(newTodoItems);
        };

  return (
    <div className='app'>
    <TodoInput createTodoItem={createTodoItem} />
    {todoItems.map((item, index) => (
    <TodoItem key={index} index={index} item={item} deleteTodoItem={deleteTodoItem} completeTodoItem={completeTodoItem} updateTodoItem={updateTodoItem} />
    ))}
    </div>
    );
}
export default App;