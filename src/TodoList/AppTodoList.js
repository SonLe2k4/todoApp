import clsx from 'clsx'
import 'boxicons'
import { useEffect, useRef } from 'react'

import { useStore, actions } from './index'
import Responsive from './styles/responsive.module.scss'
import styles from './styles/styles.module.scss'


function AppTodoList() {
  const inputRef = useRef()
  const inputEditRef = useRef()
  const [state, dispatch] = useStore()
  const { inputTodo, todos, idTodo, idEdit, inputEditTodo, listComplete } = state 

  // khi re-render lai se mat toan bo du lieu (todos)


  // useEffect(() => {
  //   console.log(listComplete);
  // }, [listComplete])

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos])

  // useEffect(() => {
  //   console.log(isMobile);
  // }, [isMobile])

  // useEffect(() => {
  //   console.log(idEdit);
  // }, [idEdit])

  const handleSubmit = () => {
    // inscrease idTodo 1
    dispatch(actions.setIdTodo())
    // 
    if(inputTodo !== '') {
      dispatch(actions.addInputTodo(
        {
          id: idTodo,
          title: inputTodo,
        }
      ))
      dispatch(actions.setInputTodo(''))
    }
    inputRef.current.focus()
  }

  const handleRemove = (id) => {
    if(listComplete.includes(id)) {
      dispatch(actions.setTodoComplete(id))
    }
    if(id === idEdit) {
      dispatch(actions.setIdEdit(null));
    }
    dispatch(actions.removeInputTodo(id));
  }

  const handleEdit = (id) => {
    dispatch(actions.setIdEdit(id));
  }
  
  const replaceTodo = (id, valueReplace) => {
    if(valueReplace !== '') {
      dispatch(actions.replaceTodo({id, valueReplace}))
      dispatch(actions.setIdEdit(null));
      dispatch(actions.setEditInputTodo(''));
    }
    inputEditRef.current.focus();
  }

  const handleComplete = (id) => {
    dispatch(actions.setTodoComplete(id))
  }
  return (
    <div id={styles.wp_Todo} className={Responsive.wp_Todo}>
      <h1 className={clsx(styles.heading, Responsive.heading)}>
        Danh sách công việc cần làm
        {
          todos.length - listComplete.length !== 0 ?
          <>
          : <span
              className={styles.amount}
            >
              {todos.length - listComplete.length}
            </span>
          </>
          : ''
        }
      </h1>
      <div className={clsx(styles.wp_input_data, Responsive.wp_input_data)}>
        <input
          className={clsx(styles.input_data, Responsive.input_data)}
          ref={inputRef}
          value={inputTodo}
          onChange={(e) => dispatch(actions.setInputTodo(e.target.value))}
        />
        <p className={clsx(styles.des_input_data, Responsive.des_input_data)}>Nhập việc để lên danh sách ...</p>
        <button
         onClick={handleSubmit}
         className={clsx(styles.button_add, Responsive.button_add)}
        >
          Thêm
        </button>
      </div>
      <ul className={clsx(styles.listTodo, Responsive.listTodo)}>
        {todos.map((todo, index) => (
          <li 
            key={todo.id}
            onDoubleClick={() => handleEdit(todo.id)}
          >
            <label
              className={styles.itemTodo}
              htmlFor={`item_todo_${todo.id}`}
            >
              <h4
                className={clsx(styles.count_todo, Responsive.count_todo)}
              >
                Việc {index + 1}
              </h4>
              {
                idEdit === todo.id ?
                <>
                <div className={styles.wp_edit}>
                  <input
                    ref={inputEditRef} 
                    value={inputEditTodo}
                    className={styles.input_edit}
                    onChange={
                      (e) => dispatch(
                        actions.setEditInputTodo(e.target.value)
                        )
                      }
                    placeholder="Nhập việc bạn muốn thay đổi ..."
                  />
                  <button
                    className={styles.button_update}
                    onClick={() => replaceTodo(todo.id, inputEditTodo)}
                  >
                    Xong
                  </button> 
                </div>
                </>
                :
                <p
                  className={
                    clsx(
                      styles.content_Todo, 
                      Responsive.content_Todo, {
                        [styles.isComplete]: listComplete.includes(todo.id)
                      }
                    )
                  }
                >
                  {todo.title}
                </p>
              }
              <div className={clsx(styles.item_list_wp_control, Responsive.item_list_wp_control)}>
                <input 
                  type="checkbox"
                  id={`item_todo_${todo.id}`}
                  onChange={() => handleComplete(todo.id)}
                  checked={listComplete.includes(todo.id)}
                />
                <button 
                  onClick={
                    () => handleRemove(todo.id)
                  }
                  className={styles.button_remove}
                >
                  Xóa
                </button>
                </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppTodoList;
