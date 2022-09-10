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
  const searchForTitle = await safeNoteRepository.findCredentialByTitle(
    title,
    userId
  );
  if (searchForTitle.length !== 0) {
    throw { type: 'alreadyUsed', message: 'This title is already in use!' };
  }
  await safeNoteRepository.createSafeNote(title, content, userId);
}
