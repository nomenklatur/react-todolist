import Form from './components/Form';
import { useState } from 'react';

function App() {
  const userTasks = [];
  const [tasksList, setTasksList] = useState(userTasks);

  function addTasks(todos){
    userTasks.push(todos);
    setTasksList(userTasks);
    console.log(tasksList);
  }
  return (
    <div>
      <Form addingTask={addTasks} />
    </div>
  );
}

export default App;
