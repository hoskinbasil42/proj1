interface User {
  id: number;
  name: string;
}

const users: User[] = [];

function addUser(user: User) {
  users.push(user);
}

function getUsers() {
  return users;
}

addUser({ id: 1, name: "John Doe" });
addUser({ id: 2, name: "Jane Doe" });
addUser({ id: 3, name: "Bob Smith" });

const users = getUsers();
console.log(users);
