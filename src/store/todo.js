import {makeAutoObservable} from "mobx";

class Todo {
  todos = [
    {id: 2, title: 'qwe', completed: false},
    {id: 3, title: 'rty', completed: false},
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo)
    console.log('addTodo')
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    console.log('removeTodo')
  }

  completeTodo(id) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    console.log('completeTodo')
  }

  fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.todos = [...this.todos, ...json]
      })
  }
}

export default new Todo()
