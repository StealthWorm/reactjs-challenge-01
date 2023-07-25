import { PlusCircle } from 'phosphor-react';

import styles from './Input.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface InputProps {
  onCreateNewTodo: (todo: string) => void;
}

export function Input({ onCreateNewTodo }: InputProps) {
  const [newTodo, setNewTodo] = useState('')

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault()

    onCreateNewTodo(newTodo)
    setNewTodo('');
  }

  function handleNewTodo(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTodo(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo e obrigatório!');
  }

  const isInputEmpty = newTodo.length === 0;

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={handleCreateNewTodo} className={styles.form} >
        <input
          name="todo"
          placeholder="Adicione uma nova tarefa"
          value={newTodo}
          onChange={handleNewTodo}
          onInvalid={handleNewTodoInvalid}
          required
        />
        <button
          type="submit"
          disabled={isInputEmpty}
        >
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </div>
  )
}