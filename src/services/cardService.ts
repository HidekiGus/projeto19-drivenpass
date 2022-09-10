import { encryptWithCryptr } from '../middlewares/cryptrManager.js';
import { getAuthorization } from '../middlewares/getAuthorization.js';
import { resolveJWT } from '../middlewares/jwtResolver.js';
import * as cardRepository from '../repositories/cardsRepository.js';
import { decryptAllPasswords } from '../middlewares/decryptAllPasswords.js';
import { decryptAllSecurityCodes } from '../middlewares/decryptAllSecurityCodes.js';

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

export async function getCards(authorization: string, id: string | undefined) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  if (id === undefined) {
    // If id was not sent
    const encryptedSecurityCodesAndPasswords = await cardRepository.getAllCards(
      userId
    );
    const encryptedSecurityCodes = await decryptAllPasswords(
      encryptedSecurityCodesAndPasswords
    );
    const decryptedData = await decryptAllSecurityCodes(encryptedSecurityCodes);
    return decryptedData;
  } else {
    // If id was sent
    const encryptedSecurityCodesAndPasswords = await cardRepository.getCardById(
      Number(id)
    );
    const encryptedSecurityCodes = await decryptAllPasswords(
      encryptedSecurityCodesAndPasswords
    );
    const decryptedData = await decryptAllSecurityCodes(encryptedSecurityCodes);
    if (decryptedData.length === 0) {
      // If nothing with this id was found
      throw {
        type: 'notFound',
        message: 'There is not a Card with this id!',
      };
    } else {
      // If a card with this id was found
      if (decryptedData[0].userId === userId) {
        // And the userId inside it matches client's id
        return decryptedData[0];
      } else {
        // But the userId inside it does not match client's id
        throw {
          type: 'unauthorized',
          message: 'This card does not belong to you!',
        };
      }
    }
  }
}
