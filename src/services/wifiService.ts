import { encryptWithCryptr } from '../middlewares/cryptrManager.js';
import { decryptAllPasswords } from '../middlewares/decryptAllPasswords.js';
import { getAuthorization } from '../middlewares/getAuthorization.js';
import { resolveJWT } from '../middlewares/jwtResolver.js';
import * as wifiRepository from '../repositories/wifiRepository.js';

export async function createWifi(
  title: string,
  networkName: string,
  password: string,
  authorization: string
) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  const encryptedPassword = await encryptWithCryptr(password);
  await wifiRepository.createWifi(
    title,
    networkName,
    encryptedPassword,
    userId
  );
}

export async function getWifis(authorization: string, id: string | undefined) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  if (id === undefined) {
    // If id was not sent
    const encryptedData = await wifiRepository.getAllWifis(userId);
    const data = await decryptAllPasswords(encryptedData);
    return data;
  } else {
    // If id was sent
    const encryptedData = await wifiRepository.getWifiById(Number(id));
    const data = await decryptAllPasswords(encryptedData);
    if (data.length === 0) {
      // If nothing with this id was found
      throw {
        type: 'notFound',
        message: 'There is not a credential with this id!',
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
          message: 'This wifi does not belong to you!',
        };
      }
    }
  }
}

export async function deleteWifi(authorization: string, id: string) {
  const jwtToken = await getAuthorization(authorization);
  const userId = await resolveJWT(jwtToken);
  const data = await wifiRepository.getWifiById(Number(id));
  if (data.length === 0) {
    throw {
      type: 'notFound',
      message: 'There is not a wi-fi with this id!',
    };
  } else if (data[0].userId === userId) {
    // If user is trying to delete his own wi-fi
    return await wifiRepository.deleteWifiById(Number(id));
  } else {
    // If user is trying to delete someone else's wi-fi
    throw {
      type: 'unauthorized',
      message: 'This wi-fi does not belong to you!',
    };
  }
}
