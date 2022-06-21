import {useState} from 'react';
import Tasks from '../Tasks';

const TodoInput = ({createTodoItem}) => {
    const [value, setValue] = useState('');
    const objGenerator = (obj) => {
        return {
            name: obj.name,
            isComplete: obj.isComplete
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === ''){
           return alert('Anda belum menambahkan todo');
        }
        const temp = new Tasks(value);
        const todoObject = objGenerator(temp);
        createTodoItem(todoObject);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='Create todo'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Create</button>
        </form>
    )}
    export default TodoInput;