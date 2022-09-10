import { decryptWithCryptr } from './cryptrManager.js';

export async function decryptAllPasswords(array: any) {
  for (let i = 0; i < array.length; i++) {
    const decryptedPassword = await decryptWithCryptr(array[i].password);
    array[i] = { ...array[i], password: decryptedPassword };
  }
  return array;
}
