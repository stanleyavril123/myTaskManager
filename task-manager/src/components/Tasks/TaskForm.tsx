import React, {useState} from "react";

const TaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('low');
    const [status, setStatus] = useState('not started'); // maybe bool
}
export default TaskForm;