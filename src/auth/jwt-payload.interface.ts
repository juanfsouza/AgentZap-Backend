// jwt-payload.interface.ts
export interface JwtPayload {
    email: string;
    sub: number; // ou string, dependendo do tipo do seu ID de usuário
  }
  