import React from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

// eslint-disable-next-line
function App() {
  
  const [todos, setTodos] = React.useState([
    {id: 0, text: 'Learn React', checked: false},
    {id: 1, text: 'Learn React', checked: false},
    {id: 2, text: 'Learn React', checked: false},
  ]);

  const [input, setInput] = React.useState('');

  const [id, setId] = React.useState(3);
 
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleAdd = () => {
    let idTemp = id + 1;
    setId(idTemp);
    setInput('');
    setTodos(
      todos.concat({
        id: id,
        text: input,
        checked: false
      })
    );
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleAdd();
    }
  }

  const handleToggle = (id) => {
    setTodos(
      todos.map(element => {
        if(element.id === id) element.checked = !element.checked;
        return element;
      })
    )
  }

  const handleRemove = (id) => {
    setTodos(
      todos.filter(element => (element.id !== id))
    )
  }

  return (
    <TodoListTemplate 
      form={<Form
        value={input}
        onKeyPress={handleKeyPress}
        onCreate={handleAdd}
        onChange={handleChange}
      />} 
      children={<TodoItemList 
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
        />}/> 
  );  
}

export default App;
