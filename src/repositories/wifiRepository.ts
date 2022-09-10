import client from '../database.js';

export async function createWifi(
  title: string,
  networkName: string,
  encryptedPassword: string,
  userId: number
) {
  await client.wifi.create({
    data: {
      title,
      networkName,
      password: encryptedPassword,
      userId,
    },
  });
}

export async function getAllWifis(userId: number) {
  return await client.wifi.findMany({
    where: {
      userId,
    },
  });
}

export async function getWifiById(id: number) {
  return await client.wifi.findMany({
    where: {
      id,
    },
  });
}
