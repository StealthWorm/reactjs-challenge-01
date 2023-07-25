import { ClipboardText } from 'phosphor-react';

import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <ClipboardText size={56} />
      <footer>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </footer>
    </div>
  )
}