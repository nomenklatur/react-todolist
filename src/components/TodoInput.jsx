import {useState} from 'react';
import Tasks from '../Tasks';

const TodoInput = ({createTodoItem}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === ''){
           return alert('Anda belum menambahkan todo');
        }
        const temp = new Tasks(value);
        createTodoItem(temp);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='Masukkan Todo'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Tambahkan</button>
        </form>
    )}
    export default TodoInput;