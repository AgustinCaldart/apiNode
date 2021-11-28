const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const UserService = require('./userService');
const { config } = require('../config/config');
const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const jwtConfig = {
      expiresIn: '7d',
    };

    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret, jwtConfig);
    return {
      user,
      token,
    };
  }

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.smtpGmailAcc,
        pass: config.smtpGmailPass,
      },
    });
    await transporter.sendMail({
      from: config.smtpGmailAcc, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Uwitu?', // Subject line
      text: 'Super Uwitu?', // plain text body
      //html: '<b>Hello uwitu?</b>', // html body
    });
    return { message: 'mail sent' };
  }
}

module.exports = AuthService;
