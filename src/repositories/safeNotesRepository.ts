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

export async function getAllSafeNotes(userId: number) {
  return await client.safeNote.findMany({
    where: {
      userId,
    },
  });
}

export async function getSafeNoteById(id: number) {
  return await client.safeNote.findMany({
    where: {
      id,
    },
  });
}

export async function deleteSafeNoteById(id: number) {
  await client.safeNote.delete({
    where: {
      id,
    },
  });
}
