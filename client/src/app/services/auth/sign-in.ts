import { httpClient } from '../http-client';

export interface SigninRequest {
  email: string
  password: string
}

interface SigninResponse {
  acessToken: string
}

export async function Signin (request: SigninRequest) {
  const { data } = await httpClient.post<SigninResponse>('/auth/signin', request);

  return data;
}
