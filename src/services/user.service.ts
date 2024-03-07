let users: User[] = [];
let currentUser: User | null = null;

export const userService = {
  signUp,
  login,
  logout
}

function signUp(username: string, password: string, email: string): void {
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    console.log(`User ${username} already exists.`);
    return;
  }

  const newUser: User = { username, password, email };
  users.push(newUser);
  console.log(`User ${username} signed up successfully!`);
}

function login(username: string, password: string): void {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    currentUser = user;
    console.log(`User ${username} logged in successfully!`);
  } else {
    console.log(`Invalid username or password.`);
  }
}

function logout(): void {
  if (currentUser) {
    console.log(`User ${currentUser.username} logged out successfully!`);
    currentUser = null;
  } else {
    console.log(`No user is currently logged in.`);
  }
}