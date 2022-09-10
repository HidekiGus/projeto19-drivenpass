import * as credentialRepository from '../repositories/credentialRepository.js';
import { resolveJWT } from '../middlewares/jwtResolver.js';
import { getAuthorization } from '../middlewares/getAuthorization.js';
import { encryptWithCryptr } from '../middlewares/cryptrManager.js';
import { decryptAllPasswords } from '../middlewares/decryptAllPasswords.js';

export async function createCredential(
  url: string,
  username: string,
  password: string,
  title: string,
  authorization: string
) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  const searchForTitle = await credentialRepository.findCredentialByTitle(
    title,
    userId
  );
  if (searchForTitle.length !== 0) {
    throw { type: 'alreadyUsed', message: 'This title is already in use!' };
  }
  const encryptedPassword = await encryptWithCryptr(password);
  await credentialRepository.createCredential(
    url,
    username,
    encryptedPassword,
    title,
    userId
  );
}

export async function getCredentials(
  authorization: string,
  id: string | undefined
) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  if (id === undefined) {
    // If id was not sent
    const encryptedData = await credentialRepository.getAllCredentials(userId);
    const data = await decryptAllPasswords(encryptedData);
    return data;
  } else {
    // If id was sent
    const encryptedData = await credentialRepository.getCredentialById(
      Number(id)
    );
    const data = await decryptAllPasswords(encryptedData);
    if (data.length === 0) {
      // If nothing with this id was found
      throw {
        type: 'notFound',
        message: 'There is not a Credential with this id!',
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
          message: 'This credential does not belong to you!',
        };
      }
    }
  }
}
