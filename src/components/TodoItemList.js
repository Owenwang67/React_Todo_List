import React from 'react'
import TodoItem from './TodoItem'

function TodoItemList({todos, onToggle, onRemove}) {
    // console.log('todos', todos, typeof todos);

    const todoList = todos.map (
        ({id, text, checked}) => (
            <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
             />
        )
    );

    return (
        <div>
            {todoList}
        </div>
    ); 
}

export default TodoItemList;