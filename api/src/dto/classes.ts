export class ExchangeAuthCodeDto {
  public constructor(
    public code: string,
    public redirectPath: string
  ) {}
}

export class IsRegisteredDto {
  public constructor(public id: string) {}
}
