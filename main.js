console.log('inside js')

const todos = [
    {
        title: 'Meeting with boss',
        isCompleted: false
    },
    {
        title: 'Walk my dog',
        isCompleted: false
    },
    {
        title: 'Picnic',
        isCompleted: false
    },
]

localStorage.setItem('my_todos', JSON.stringify(todos))
const existingTodos = JSON.parse(localStorage.getItem('my_todos'))