import {nanoid} from 'nanoid';

class Tasks {
    constructor(taskName){
        this.id = nanoid(16);
        this.name = taskName;
        this.isCompleted = false;
    }
}

export default Tasks;