import { Header } from './components/Header';
import { Input } from './components/Input';
import { Todo, TodoType } from './components/Todo';
import { EmptyList } from './components/EmptyList';
import { useState } from 'react';

import styles from './App.module.css';
import './global.css';

const todos_list: TodoType[] = [
  {
    id: 1,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    id: 2,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    id: 3,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    id: 4,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: true,
  },
  {
    id: 5,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: true,
  },
]

function App() {
  const [todos, setTodos] = useState<TodoType[]>(todos_list)

  function deleteTodo(todoId: number) {
    const todosWithoutDeletedOne = todos.filter(todo => {
      return todo.id !== todoId;
    })

    setTodos(todosWithoutDeletedOne)
  }

  function setCheckedTodo(todoId: number) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function createTodo(todo_content: string) {
    setTodos([...todos, {
      id: todos.length + 1,
      content: todo_content,
      checked: false
    }]);
  }

  const completedTodos = todos.reduce((count, todo) => {
    if (todo.checked) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Input onCreateNewTodo={createTodo} />

        <div className={styles.tasks}>
          <header className={styles.info}>
            <div className={styles.infoContent}>
              <strong>Tarefas criadas</strong>
              <span>{todos.length}</span>
            </div>
            <div className={styles.infoContent}>
              <strong>Concluídas</strong>
              <span>
                {todos.length > 0
                  ? `${completedTodos} de ${todos.length}`
                  : todos.length
                }
              </span>
            </div>
          </header>

          <div>
            {todos.length > 0
              ? (
                <ul className={styles.list}>
                  {todos.map((todo) => {
                    return (
                      <Todo
                        key={todo.id}
                        todo={todo}
                        onChangeTodo={setCheckedTodo}
                        onDeleteTodo={deleteTodo}
                      />
                    )
                  })}
                </ul>
              )
              : <EmptyList />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
