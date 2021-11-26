export interface ICompaniesDictionary {
  [id: string]: {
    // Values contain duplicates of the ID field
    // since the values of the dictionary have to be retrieved without keys.
    id: string;
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
