import {current} from 'TodoApp'
import {getQRCodePath} from './functions-dist.js'

export default class TodoListPage {
    constructor(todoList = current.app.todoList) {
        this.todoList = todoList
        this.newTodo = ""
    }

    get todosLeft() {
        return this.todoList.todos.filter(x => !x.isDone).length
    }

    addTodo() {
        this.todoList.addTodo(this.newTodo)
        this.newTodo = ""
    }
}