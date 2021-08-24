import cors from 'cors';

import dto from '@dto';

export interface IConfirmationMailOptions {
  destination: string;
  uuid: string;
}

export interface ICorsResponse {
  statusCode?: number | undefined;
  setHeader(key: string, value: string): any;
  end(): any;
}

export interface ICorsMiddleware {
  (req: cors.CorsRequest, res: ICorsResponse, next: (err?: any) => any): void;
}

export interface IReplacements {
  [key: string]: string;
}

export interface IStringIndexable {
  [key: string]: string;
}

export interface CompanyData {
  name: string;
  logoUrl: string | null;
}

export type UserData = dto.ProfileUserDto;
