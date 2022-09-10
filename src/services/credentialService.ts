import * as credentialRepository from '../repositories/credentialRepository.js';
import { resolveJWT } from '../middlewares/jwtResolver.js';
import { getAuthorization } from '../middlewares/getAuthorization.js';
import { encryptWithCryptr } from '../middlewares/cryptrManager.js';

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
