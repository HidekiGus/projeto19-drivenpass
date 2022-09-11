import client from '../database.js';

export async function createCredential(
  url: string,
  username: string,
  password: string,
  title: string,
  userId: number
) {
  await client.credential.create({
    data: {
      url,
      username,
      password,
      title,
      userId,
    },
  });
}

export async function findCredentialByTitle(title: string, userId: number) {
  return await client.credential.findMany({
    where: {
      title,
      userId,
    },
  });
}

export async function getAllCredentials(userId: number) {
  return await client.credential.findMany({
    where: {
      userId,
    },
  });
}

export async function getCredentialById(id: number) {
  return await client.credential.findMany({
    where: {
      id,
    },
  });
}

export async function deleteCredentialById(id: number) {
  await client.credential.delete({
    where: {
      id,
    },
  });
}
