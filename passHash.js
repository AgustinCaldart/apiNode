const bcrypt = require('bcrypt');

async function hashPass() {
  const myPass = 'admin123';
  const hash = await bcrypt.hash(myPass, 10);
  console.log(hash);
}
hashPass();
