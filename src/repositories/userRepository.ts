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

export async function getPasswordByEmail(email: string) {
  const user = await client.user.findUnique({
    where: {
      email,
    },
  });
  return user.password;
}

export async function getUserByEmail(email: string) {
  const userData = await client.user.findUnique({
    where: { email },
  });
  return userData.id;
}

export async function checkUserByEmail(email: string) {
  const user = await client.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}
