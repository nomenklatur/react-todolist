import React from 'react';
import Tasks from '../Tasks';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskName: '',
        }
    }

    handleSubmit(e){
        const todos = new Tasks(this.state.taskName);
        this.props.addingTask(todos);
        e.preventDefault();
    }

    handleChange(e){
        this.setState({taskName: e.target.value});
    }

    render(){
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type='text' placeholder='Masukkan tugas anda' onChange={(e) => this.handleChange(e)}></input>
                    <input type='submit' value='Tambahkan'></input>
                </form>
            </div>
        );
    }
}

export default Form;