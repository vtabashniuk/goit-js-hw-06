import users from './users.js';
console.table(users);

console.log('--==   Задача - 01   ==--');

const getUsernames = users => users.map(user => user.name);
console.log(getUsernames(users));

console.log('--==   Задача - 02   ==--');

const getUserWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);
console.table(getUserWithEyeColor(users, 'blue'));

console.log('--==   Задача - 03   ==--');

const getUsersByGender = (users, gender) =>
  users.filter(user => user.gender === gender);
console.table(getUsersByGender(users, 'male'));

console.log('--==   Задача - 04   ==--');

const getInactiveUsers = users => users.filter(user => !user.isActive);
console.table(getInactiveUsers(users));

console.log('--==   Задача - 05   ==--');

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

console.log('--==   Задача - 06   ==--');

const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);
console.table(getUsersWithAge(users, 20, 30));
console.table(getUsersWithAge(users, 30, 40));

console.log('--==   Задача - 07   ==--');

const calculateTotalBalance = users =>
  users.reduce((total, user) => total + user.balance, 0);
console.log(`total users balance is: ${calculateTotalBalance(users)}`);

console.log('--==   Задача - 08   ==--');

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

console.log('--==   Задача - 09   ==--');

const getNameSortedByFriendsCount = users =>
  [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
console.log(getNameSortedByFriendsCount(users));

console.log('--==   Задача - 10   ==--');

const getSortedUniqueSkills = users =>
  [...new Set([...users.flatMap(user => user.skills)])].sort();
console.log(getSortedUniqueSkills(users));
