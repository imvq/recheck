import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login';

import * as generalTypes from 'utils/typing/general';

export interface IDispatchProps {
  setPageLocked(flag: boolean): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setIsAuthorized(flag: boolean): void;
  setCurrentProfileInfo(profileInfo: generalTypes.AppProfileInfo): void;
}

export type IProps = IDispatchProps;

export type FacebookLoginResponse = ReactFacebookLoginInfo | ReactFacebookFailureResponse;
