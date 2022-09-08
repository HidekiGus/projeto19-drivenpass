import client from "../database.js";

export async function checkIfEmailIsUsed(email: string) {
  const isUsed = await client.user.findMany({ where: { email } });
  return isUsed;
}