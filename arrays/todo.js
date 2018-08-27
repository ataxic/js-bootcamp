const todo = [{
    text: "Paint the wall",
    completed: true
},{
    text: "Make some coffee",
    completed: false
},{
    text: "Walk the dog",
    completed: true
},{
    text: "Have a nap",
    completed: false
},{
    text: "Clean up the room",
    completed: true
}];

// console.log(todo);

const deleteToDo = function(todo,todoItem) {
    const indexToDelete =  todo.findIndex(function(item, index) {
        return item.text.toLowerCase() === todoItem.toLowerCase()
    })
    if (indexToDelete > -1) {
        todo.splice(indexToDelete,1);
        console.log(todo);
    } else {
        console.log("No match!");
    }
}

const getThingsToDo = function(todo) {
    return todo.filter(function(todo, index) {
        const notDone = todo.completed === false;
        return notDone;
    })
}

const sortTodos = function(todo) {
    todo.sort(function(a, b){
        if (!a.completed && b.completed) {
            return -1;
        } else if (!b.completed && a.completed) {
            return 1;
        } else {
            return 0;
        }
    })
}
//console.log(false < true);
sortTodos(todo);
console.log(todo);

// console.log(getThingsToDo(todo));