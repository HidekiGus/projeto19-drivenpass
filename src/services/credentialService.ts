import * as credentialRepository from '../repositories/credentialRepository.js';
import jwt, { JwtPayload } from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';

interface Token {
  userId: number;
  iat: number;
}

export async function createCredential(
  url: string,
  username: string,
  password: string,
  title: string,
  jwtKey: string
) {
  const data = await resolveJWT(jwtKey);
  console.log(data);
}

export async function resolveJWT(jwtKey: string) {
  const data = jwtDecode<Token>(jwtKey);

  return data.userId;
}
