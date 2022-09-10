import jwtDecode from 'jwt-decode';

interface Token {
  userId: number;
  iat: number;
}

export async function resolveJWT(jwtKey: string) {
  const data = jwtDecode<Token>(jwtKey);

  return data.userId;
}
