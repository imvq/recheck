import cors from 'cors';

import Dtos from '@dto';

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

export type CompanyData = Dtos.CreateCompanyDto;

export type UserData = Dtos.UserDto;
