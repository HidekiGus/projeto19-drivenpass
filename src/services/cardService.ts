import { encryptWithCryptr } from '../middlewares/cryptrManager.js';
import { getAuthorization } from '../middlewares/getAuthorization.js';
import { resolveJWT } from '../middlewares/jwtResolver.js';
import * as cardRepository from '../repositories/cardsRepository.js';

export async function createCard(
  title: string,
  cardNumber: string,
  securityCode: string,
  password: string,
  isVirtual: boolean,
  type: string,
  authorization: string
) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  const searchForTitle = await cardRepository.findCardByTitle(title, userId);
  if (searchForTitle.length !== 0) {
    throw { type: 'alreadyUsed', message: 'This title is already in use!' };
  }
  const encryptedSecurityCode = await encryptWithCryptr(securityCode);
  const encryptedPassword = await encryptWithCryptr(password);
  await cardRepository.createCard(
    title,
    cardNumber,
    encryptedSecurityCode,
    encryptedPassword,
    isVirtual,
    type,
    userId
  );
}
