import { storageService } from '@/services/storage.service'

let users: User[] = [];
let currentUser: User | null = null;

const STORAGE_KEY: string = 'userDB'

export const userService = {
  signUp,
  login,
  logout
}

function signUp(username: string, password: string, email: string): void {
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    console.log(`User ${username} already exists.`);
  } 

  const newUser: User = { username, password, email, userId: _makeId() };
  users.push(newUser);
  _saveUsersToStorage(users)
  console.log(`User ${username} signed up successfully!`);
}
{/* TODO: login and connect to local storage */}
function login(email: string, password: string): void {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = user;
    console.log(`User ${email} logged in successfully!`);
  } else {
    console.log(`Invalid username or password.`);
  }
}

{/* TODO: logout and connect to local storage */}
function logout(): void {
  if (currentUser) {
    console.log(`User ${currentUser.username} logged out successfully!`);
    currentUser = null;
  } else {
    console.log(`No user is currently logged in.`);
  }
}

function _saveUsersToStorage(users: User[]) {
  storageService.saveToStorage(STORAGE_KEY, users)
}

function _loadUsersFromStorage() {
  return storageService.loadFromStorage(STORAGE_KEY)
}

function _makeId(length: number = 5) {
  var text: string = ''
  var possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i: number = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}