export class ExchangeLinkedInAuthCodeDto {
  public constructor(
    public code: string,
    public redirectPath: string
  ) {}
}

export class CreateReviewDto {
  public constructor(
    public authorId: string,
    public targetFirstName: string,
    public targetLastName: string,
    public bounds: string,
    public tasks: string,
    public strengths: string,
    public improvements: string,
    public results: string,
    public levelMark: string,
    public levelComment: string,
    public activityMark: string,
    public activityComment: string,
    public ownHireOpinionMark: string,
    public ownHireOpinionComment: string,
    public qualityMark: string,
    public qualityComment: string,
    public leadershipMark: string,
    public leadershipComment: string,
    public adviceComment: string,
    public recommenderLink1: string,
    public recommenderLink2: string,
    public recommenderLink3: string
  ) {}
}

export class CheckIsUserRegisteredDto {
  public constructor(public profileId: string) {}
}

export class PrepareUserDto {
  public constructor(
    public name: string,
    public email: string,
    public photoUrl: string,
    public companySite: string,
    public companyName: string,
    public position: string,
    public workStartMonth: string,
    public workStartYear: string
  ) {}
}

export class RegistrationDto {
  public constructor(public profileId: string) {}
}
