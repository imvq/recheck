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
    public targetShareableId: string,
    public tasks: string,
    public strengths: string,
    public recommendation: string,
    public recommendationMark: number
  ) {}
}

export class СheckIsEmailAvailableDto {
  public constructor(public email: string) {}
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
    public logoUrl: string | null
  ) {}
}

export class GetAccessToUserDto {
  public constructor(
    public profileId: string,
    public shareableId: string
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

export class GetRecommendationsDto {
  public constructor(public chunk: number) {}
}

export class GetTargetNReviewsGotDto {
  public constructor(
    public askerProfileId: string,
    public targetShareableId: string
  ) {}
}

export class IsTargetConnectedDto {
  public constructor(
    public askerProfileId: string,
    public targetShareableId: string
  ) {}
}

export class UserDto {
  public constructor(
    public profileId: string,
    public name: string,
    public email: string,
    public photoUrl: string,
    public company: {
      id: number;
      name: string;
    },
    public position: string,
    public workStartMonth: number,
    public workStartYear: number,
    public referral: string | null
  ) {}
}

export class PrepareUserDto extends UserDto {}

export class ReassignConfirmationEmailDto {
  public constructor(
    public profileId: string,
    public email: string
  ) {}
}

export class ResendConfirmationDto {
  public constructor(public profileId: string) {}
}

export class RetrievePorfileInfoReduced {
  public constructor(public profileId: string) {}
}

export class SearchUserDto {
  public constructor(public tokens: string[]) {}
}
