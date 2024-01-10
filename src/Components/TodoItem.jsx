import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplit, removTodo } from '../Store/slices/ToDoSlices';

const TodoItem = ({ id, text, completed }) => {

    const dispath = useDispatch()

    const handelChange = () => {
        dispath(toggleComplit({ id }))
    }

    const handelRemove = () => {
        dispath(removTodo({ id }))
    }

    return (
        <li>
            <input
                checked={completed}
                onChange={handelChange}
                type="checkbox" />
            <span style={{ textDecoderation: !completed ? 'none' : 'line-through' }}>{text}</span>
            <span onClick={handelRemove} >&times;</span>
        </li>
    );
};

export default TodoItem;