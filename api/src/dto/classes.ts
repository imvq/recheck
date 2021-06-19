import * as utilityTypes from '@typing/utility';

export class BindReviewTargetDto {
  public constructor(
    public reviewId: string,
    public profileId: string
  ) {}
}

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
    public workplace: string,
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

export class CheckIsUserConfirmedDto {
  public constructor(public profileId: string) {}
}

export class CheckIsUserRegisteredDto {
  public constructor(public profileId: string) {}
}

export class CompleteRegistrationDto {
  public constructor(
    public profileId: string,
    public confirmationCode: string
  ) {}
}

export class CreateCompanyDto {
  public constructor(
    public name: string,
    public logoUrl: utilityTypes.Nullable<string>
  ) {}
}

export class GetMatchedCompaniesDto {
  public constructor(public sequence: string) {}
}

export class GetNReviewsGotDto {
  public constructor(public profileId: string) {}
}

export class GetNReviewsLeftDto {
  public constructor(public profileId: string) {}
}

export class GetNthReviewGotDto {
  public constructor(
    public profileId: string,
    public nthReview: number
  ) {}
}

export class GetNthReviewLeftDto {
  public constructor(
    public profileId: string,
    public nthReview: number
  ) {}
}

export class UserDto {
  public constructor(
    public profileId: string,
    public name: string,
    public email: string,
    public photoUrl: string,
    public companyName: string,
    public position: string,
    public workStartMonth: number,
    public workStartYear: number
  ) {}
}

export class PrepareUserDto extends UserDto {}

export class SearchUserDto {
  public constructor(public name: string) {}
}
