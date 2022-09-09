import * as userRepository from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';

export async function createUser(email: string, password: string) {
  const isUsed = await userRepository.checkIfEmailIsUsed(email);
  if (isUsed.length !== 0) {
    throw { type: 'alreadyUsed', message: 'Email already in use!' };
  }
  const encryptedPassword = bcrypt.hashSync(password, 10);
  await userRepository.createUser(email, encryptedPassword);
}
