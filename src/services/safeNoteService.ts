import { resolveJWT } from '../middlewares/jwtResolver.js';
import { getAuthorization } from '../middlewares/getAuthorization.js';
import * as safeNoteRepository from '../repositories/safeNotesRepository.js';

export async function createSafeNote(
  title: string,
  content: string,
  authorization: string
) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  const searchForTitle = await safeNoteRepository.findSafeNoteByTitle(
    title,
    userId
  );
  if (searchForTitle.length !== 0) {
    throw { type: 'alreadyUsed', message: 'This title is already in use!' };
  }
  await safeNoteRepository.createSafeNote(title, content, userId);
}

export async function getSafeNotes(
  authorization: string,
  id: string | undefined
) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  if (id === undefined) {
    // If id was not sent
    const data = await safeNoteRepository.getAllSafeNotes(userId);
    return data;
  } else {
    // If id was sent
    const data = await safeNoteRepository.getSafeNoteById(Number(id));
    if (data.length === 0) {
      // If nothing with this id was found
      throw {
        type: 'notFound',
        message: 'There is not a Safe Note with this id!',
      };
    } else {
      // If this id was found
      if (data[0].userId === userId) {
        // And the userId inside it matches client's id
        return data[0];
      } else {
        // But the userId inside it does not match client's id
        throw {
          type: 'unauthorized',
          message: 'This Safe Note does not belong to you!',
        };
      }
    }
  }
}

export async function deleteSafeNote(authorization: string, id: string) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  const data = await safeNoteRepository.getSafeNoteById(Number(id));
  if (data.length === 0) {
    throw {
      type: 'notFound',
      message: 'There is not a Safe Note with this id!',
    };
  } else if (data[0].userId === userId) {
    // If user is trying to delete his own safe note
    return await safeNoteRepository.deleteSafeNoteById(Number(id));
  } else {
    // If user is trying to delete someone else's safe note
    throw {
      type: 'unauthorized',
      message: 'This Safe Note does not belong to you!',
    };
  }
}
