export interface ICompanyData {
  name: string;
  logoUrl: string | null;
}

export interface ILogger {
  log(message: string): void;
  err(message: string): void;
}

export interface IReplacements {
  [key: string]: string;
}

export interface IStringIndexable {
  [key: string]: string;
}
