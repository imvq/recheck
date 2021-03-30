export class ExchangeAuthCodeDto {
  public constructor(
    public code: string,
    public redirectPath: string
  ) {}
}

export class UserDto {
  public constructor(public email: string) {}
}
