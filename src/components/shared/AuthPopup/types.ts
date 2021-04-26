import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login';

import { AppProfileInfo } from 'utils/types.common';

export interface IDispatchProps {
  setPageLocked(flag: boolean): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setIsAuthorized(flag: boolean): void;
  setCurrentProfileInfo(profileInfo: AppProfileInfo): void;
}

export type IProps = IDispatchProps;

export type FacebookLoginResponse = ReactFacebookLoginInfo | ReactFacebookFailureResponse;
