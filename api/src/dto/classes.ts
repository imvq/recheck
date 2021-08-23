// This module contains types for Swagger docs auto-generating.
// There are some restrictions for types here:
// 1) classes only;
// 2) public fields only (i.e. public getters with private fields is not allowed).

import { PairRelatedRequestDto, SelfRelatedRequestDto } from './base';

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

export class CheckIsUserAvailableForReviewDto extends PairRelatedRequestDto {}

export class CheckIsUserConfirmedDto extends SelfRelatedRequestDto {}

export class CheckIsUserRegisteredDto extends SelfRelatedRequestDto {}

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

export class GetColleaguesDto extends SelfRelatedRequestDto {}

export class GetMatchedCompaniesDto {
  public constructor(public sequence: string) {}
}

export class GetNReviewsGotDto extends SelfRelatedRequestDto {}

export class GetNReviewsLeftDto extends SelfRelatedRequestDto {}

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

export class GetTargetNReviewsGotDto extends PairRelatedRequestDto {}

export class DoesUserHasAvailableProfilesDto extends SelfRelatedRequestDto {}

export class IsTargetConnectedDto extends PairRelatedRequestDto {}

export class MakeUserAvailableDto extends PairRelatedRequestDto {}

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

export class ResendConfirmationDto extends SelfRelatedRequestDto {}

export class RetrievePorfileInfoReduced extends SelfRelatedRequestDto {}

export class SearchUserDto {
  public constructor(public tokens: string[]) {}
}

export class SearchUserByShareableIdDto {
  public constructor(public shareableId: string) {}
}
