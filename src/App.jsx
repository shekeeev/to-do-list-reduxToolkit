import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Main from './Components/Main/Main';
import { useDispatch } from 'react-redux';
import { addTodo } from './Store/slices/ToDoSlices';
import TodoList from './Components/TodoList';

function App() {

  const [text, setText] = useState('')
  const dispath = useDispatch()

  const handelAction = (e) => {
    e.preventDefault()
    if (text.trim().length) {
      dispath(addTodo({ text }))
      setText('')
    }

  }


  return (
    <div className="App">
      <Form
        value={text}
        setText={setText}
        handelAction={handelAction}
      />
      <TodoList />
      {/* <Main /> */}
    </div>
  );
}

export default App;
