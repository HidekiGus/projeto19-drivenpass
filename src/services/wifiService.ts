import { encryptWithCryptr } from '../middlewares/cryptrManager.js';
import { getAuthorization } from '../middlewares/getAuthorization.js';
import { resolveJWT } from '../middlewares/jwtResolver.js';
import * as wifiRepository from '../repositories/wifiRepository.js';

export async function createWifi(
  title: string,
  networkName: string,
  networkPassword: string,
  authorization: string
) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  const encryptedNetworkPassword = await encryptWithCryptr(networkPassword);
  await wifiRepository.createWifi(
    title,
    networkName,
    encryptedNetworkPassword,
    userId
  );
}

export async function getWifis(authorization: string, id: string | undefined) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  if (id === undefined) {
    // If id was not sent
  }
}
