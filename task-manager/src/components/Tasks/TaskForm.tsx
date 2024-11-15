import React, {useState} from "react";

const TaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('low');
    const [status, setStatus] = useState('not started');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const Task = {
            title,
            description,
            dueDate,
            priority,
            status
        };

    };



    return (
        <form>
        </form>
    );
}
export default TaskForm;