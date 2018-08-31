const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')

    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch(e) {
        return []
    }
 
}

const saveTodos = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos))
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
      
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    
    document.querySelector('#todos').innerHTML = ''

    const summary = generateSummaryDOM(incompleteTodos)

    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach((todo) => {
        const newParagraph = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(newParagraph)
    })
}
const removeTodo = (id) => {
    const todoID = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if (todoID > -1) {
        todos.splice(todoID, 1)
    }
}

const toggleTodo = (id) => {
    const todoID = todos.findIndex(function(todo){
        return todo.id === id
    })

    if (todoID > -1) {
        todos[todoID].completed = !todos[todoID].completed
    }

}
const generateTodoDOM = (todo) => {
    const todoDiv = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')


    button.textContent = 'Delete'
    button.addEventListener('click', () => {
        console.log(todo.id)
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)   
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    todoText.textContent = todo.text
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked =  todo.completed

    todoDiv.appendChild(checkbox)
    todoDiv.appendChild(todoText)
    todoDiv.appendChild(button)

    return todoDiv
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}