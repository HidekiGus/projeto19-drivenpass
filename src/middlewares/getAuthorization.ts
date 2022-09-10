export async function getAuthorization(authorization: string) {
  const token = authorization.replace('Bearer ', '');
  return token;
}
