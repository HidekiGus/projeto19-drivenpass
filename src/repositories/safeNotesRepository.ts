import client from '../database.js';

export async function createSafeNote(
  title: string,
  content: string,
  userId: number
) {
  await client.safeNote.create({
    data: {
      title,
      content,
      userId,
    },
  });
}

export async function findSafeNoteByTitle(title: string, userId: number) {
  return await client.safeNote.findMany({
    where: {
      title,
      userId,
    },
  });
}
