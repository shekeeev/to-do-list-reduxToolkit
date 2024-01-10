import React from 'react';

const Form = ({ value, setText, handelAction }) => {
    return (
        <form onSubmit={handelAction}>
            <input
                value={value}
                onChange={(e) => setText(e.target.value)}
                type="text" placeholder='new todo' />
            <button>Add Todo</button>
        </form>
    );
};

export default Form;