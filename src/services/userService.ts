import * as userRepository from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';
import client from '../database.js';
import jwt from 'jsonwebtoken';

export async function createUser(email: string, password: string) {
  const isUsed = await userRepository.checkIfEmailIsUsed(email);
  if (isUsed.length !== 0) {
    throw { type: 'alreadyUsed', message: 'Email already in use!' };
  }
  const encryptedPassword = bcrypt.hashSync(password, 10);
  await userRepository.createUser(email, encryptedPassword);
}

export async function logIn(email: string, password: string) {
  const userExists = await userRepository.checkUserByEmail(email);
  if (userExists === null) {
    // If user with this email does not exist
    throw {
      type: 'notFound',
      message: 'Check email and password and try again!',
    };
  } else {
    // If user with this email was found
    const encryptedPassword = await userRepository.getPasswordByEmail(email);
    const doPasswordsCheck = bcrypt.compareSync(password, encryptedPassword);
    if (!doPasswordsCheck) {
      throw {
        type: 'unauthorized',
        message: 'Check your email and password and try again!',
      };
    }
    return await generateJWT(email);
  }
}

export async function generateJWT(email: string) {
  const userId = await userRepository.getUserByEmail(email);
  const data = { userId };
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(data, secretKey);
  return token;
}
