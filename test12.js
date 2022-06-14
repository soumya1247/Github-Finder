let userId = 2;

const users = [
    { id: 0, name: 'name 1' },
    { id: 1, name: 'name 2' },
    { id: 2, name: 'name 3' }
]

const author = users.find(user => user.id === userId);
console.log(author);