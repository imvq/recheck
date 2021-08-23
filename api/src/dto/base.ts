// This module contains types for Swagger docs auto-generating.
// There are some restrictions for types here:
// 1) classes only;
// 2) public fields only (i.e. public getters with private fields is not allowed).

export class PairRelatedRequestDto {
  public constructor(
    public askerProfileId: string,
    public targetShareableId: string
  ) {}
}

export class SelfRelatedRequestDto {
  public constructor(public profileId: string) {}
}
