const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzODAyMjgyMX0.hKGehKoM6xaGeJZ4UZ-QdOgYrf95eYkDlxcIYIMdzQY';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);

console.log(payload); //tenemos el payload { sub: 1, role: 'customer', iat: 1638022821 }
