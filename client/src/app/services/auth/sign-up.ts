import { httpClient } from '../http-client';

export interface SignupRequest {
  email: string
  password: string
}

interface SignupResponse {
  acessToken: string
}

export async function Signup (request: SignupRequest) {
  const { data } = await httpClient.post<SignupResponse>('/auth/signin', request);

  return data;
}
