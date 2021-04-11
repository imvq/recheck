export class ExchangeAuthCodeDto {
  public constructor(
    public code: string,
    public redirectPath: string
  ) {}
}

export class CheckLinkedInLinkDto {
  public constructor(public link: string) {}
}

export class IsRegisteredDto {
  public constructor(public profileId: string) {}
}

export class RegistrationDto {
  public constructor(public profileId: string) {}
}

export class ReviewDto {
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
