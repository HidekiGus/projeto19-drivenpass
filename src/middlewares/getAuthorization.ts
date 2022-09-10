export async function getAuthorization(authorization: string) {
  try {
    const token = authorization.replace('Bearer ', '');
    return token;
  } catch (error) {
    throw { type: 'unauthorized', message: 'Authorization was not sent!' };
  }
}
