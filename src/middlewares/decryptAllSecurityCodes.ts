import { decryptWithCryptr } from './cryptrManager.js';

export async function decryptAllSecurityCodes(array: any) {
  for (let i = 0; i < array.length; i++) {
    const decryptedSecurityCode = await decryptWithCryptr(
      array[i].securityCode
    );
    array[i] = { ...array[i], securityCode: decryptedSecurityCode };
  }
  return array;
}
