let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#text-box').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    //console.log(e.target.value)
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    
    e.preventDefault()
    
    let todoDescription

    if (e.target.elements.todoText.value.length > 0) {
        todoDescription = e.target.elements.todoText.value
    } else {
        todoDescription = 'Unnamed Todo'
    }    

    //add new item to array
    todos.push({
        id: uuidv4(),
        text: todoDescription,
        completed: false // new titem so we assume false
    })

    e.target.elements.todoText.value = ''

    saveTodos(todos)

    renderTodos(todos, filters)

})

document.querySelector('#hide-done').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})