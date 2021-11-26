const bcrypt = require('bcrypt');

async function verifyPass() {
  const myPass = 'admin123';
  const hash = '$2b$10$n/.4sVKkKg7pHM.JZXO5ReQ95cmWWrag8xVpqXP0Tr4RuU/Z6I9ym';
  const isMatch = await bcrypt.compare(myPass, hash);
  console.log(isMatch);
}
verifyPass();
