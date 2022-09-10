import Cryptr from 'cryptr';
const cryptr = new Cryptr('secretKey');

export async function encryptWithCryptr(stringToBeEncrypted: string) {
  const encryptedString: string = cryptr.encrypt(stringToBeEncrypted);
  return encryptedString;
}

export async function decryptWithCryptr(stringToBeDecrypted: string) {
  const decryptedString: string = cryptr.decrypt(stringToBeDecrypted);
  return decryptedString;
}
