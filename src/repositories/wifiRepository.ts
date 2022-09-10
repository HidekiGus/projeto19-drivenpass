import client from '../database.js';

export async function createWifi(
  title: string,
  networkName: string,
  encryptedNetworkPassword: string,
  userId: number
) {
  await client.wifi.create({
    data: {
      title,
      networkName,
      networkPassword: encryptedNetworkPassword,
      userId,
    },
  });
}
