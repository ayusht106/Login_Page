const bcrypt = require('bcrypt');
const plainTextPassword = 'temp123'; 
const hashedPassword = bcrypt.hashSync(plainTextPassword, 10); 

console.log('Hashed password:', hashedPassword);