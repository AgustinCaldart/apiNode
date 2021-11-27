const jwt = require('jsonwebtoken');
//encriptacion de payload y header, .env
const secret = 'myCat';
const payload = {
  //identificacion de usuario
  sub: 1,
  role: 'customer',
};

function signToken(payload, secret) {
  return jwt.sign(payload, secret); //generamos una firma
}

const token = signToken(payload, secret);
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
//eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzODAyMjgyMX0.
//hKGehKoM6xaGeJZ4UZ-QdOgYrf95eYkDlxcIYIMdzQY
console.log(token);
