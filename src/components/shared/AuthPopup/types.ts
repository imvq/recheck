import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login';

import * as generalTypes from 'commons/types/general';

export interface IDispatchProps {
  setPageLocked(flag: boolean): void;
  setIsLoginPopupVisible(flag: boolean): void;
  setIsAuthorized(flag: boolean): void;
  setCurrentProfileInfo(profileInfo: generalTypes.IAppProfileInfo): void;
}

export type IProps = IDispatchProps;

export type FacebookLoginResponse = ReactFacebookLoginInfo | ReactFacebookFailureResponse;
