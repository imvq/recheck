export class ExchangeAuthCodeDto {
  public constructor(
    public code: string,
    public redirectPath: string
  ) {}
}

export class IsRegisteredDto {
  public constructor(public profileId: string) {}
}

export class RegistrationDto {
  public constructor(
    public profileId: string,
    public linkedIn: string
  ) {}
}
