import client from '../database.js';

export async function checkIfEmailIsUsed(email: string) {
  const isUsed = await client.user.findMany({ where: { email } });
  return isUsed;
}

export async function createUser(email: string, encryptedPassword: string) {
  await client.user.create({
    data: {
      email,
      password: encryptedPassword,
    },
  });
}
