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
