export interface ICompaniesDictionary {
  [companyId: string]: {
    name: string;
    logoUrl: string | null;
    members: ISearchedProfileBasic[];
  };
}

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

export interface ISearchedProfileBasic {
  fullName: string;
  shareableId: string;
  photoUrl: string;
  currentPosition: string;
}
