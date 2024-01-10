import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {

    const { todos } = useSelector(state => state.todos)

    // console.log(todos);


    return (
        <ol className='aaa'>
            {
                todos.length > 0 &&
                todos.map(el => <TodoItem key={el.id}{...el} />)
            }
        </ol>
    );
};

export default TodoList;