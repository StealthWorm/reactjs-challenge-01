import { Trash } from 'phosphor-react';

import styles from './Todo.module.css'

export interface TodoType {
  id: number;
  content: string;
  checked: boolean;
}

interface TodoProps {
  todo: TodoType;
  onDeleteTodo: (id: number) => void;
  onChangeTodo: (id: number) => void;
}

export function Todo({ todo, onChangeTodo, onDeleteTodo }: TodoProps) {
  function handleDeleteTodo(todoId: number) {
    onDeleteTodo(todoId)
  }

  function handleSetChecked(todoId: number) {
    onChangeTodo(todoId)
  }

  return (
    <li key={todo.id} className={styles.todoItem} >
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => handleSetChecked(todo.id)}
      />
      <p className={todo.checked ? styles.completed : styles.open}>{todo.content}</p>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        title="Deletar Item">
        <Trash size={24} />
      </button>
    </li>
  )
}