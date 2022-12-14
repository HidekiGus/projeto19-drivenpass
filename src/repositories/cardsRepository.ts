import client from '../database.js';

export async function findCardByTitle(title: string, userId: number) {
  return await client.card.findMany({
    where: {
      title,
      userId,
    },
  });
}

export async function createCard(
  title: string,
  cardNumber: string,
  encryptedSecurityCode: string,
  encryptedPassword: string,
  isVirtual: boolean,
  type: string,
  userId: number
) {
  await client.card.create({
    data: {
      title,
      cardNumber,
      securityCode: encryptedSecurityCode,
      password: encryptedPassword,
      isVirtual,
      type,
      userId,
    },
  });
}

export async function getAllCards(userId: number) {
  return await client.card.findMany({
    where: {
      userId,
    },
  });
}

export async function getCardById(id: number) {
  return await client.card.findMany({
    where: {
      id,
    },
  });
}

export async function deleteCardById(id: number) {
  await client.card.delete({
    where: {
      id,
    },
  });
}
