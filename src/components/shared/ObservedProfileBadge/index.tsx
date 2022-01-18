import { memo } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

import CustomButton from 'components/shared/CustomButton';

import { jumpTo } from 'commons/utils/misc';

import * as types from './types';
import * as styled from './styled';

function ObservedProfileBadge(props: types.IProps) {
  return (
    <styled.ObservedProfileBadge>
      <styled.PhotoWrapper>
        <styled.Photo src={props.observedUserData.photoUrl} />
      </styled.PhotoWrapper>

      <styled.ContentWrapper>
        <styled.Title>{props.observedUserData.fullName}</styled.Title>

        <styled.Entry>
          <styled.Entry isDimmed>Должность:&nbsp;&nbsp;</styled.Entry>
          <styled.Entry>{props.observedUserData.currentPosition}</styled.Entry>
        </styled.Entry>

        <styled.Entry>
          <styled.Entry isDimmed>Место работы:&nbsp;&nbsp;</styled.Entry>
          <styled.Entry>{props.observedUserData.currentCompanyName}</styled.Entry>
        </styled.Entry>

        {props.isDemoUser && (
          <styled.DemoLabel>
            <AiOutlineStar />
            <span>Тестовый кандидат</span>
          </styled.DemoLabel>
        )}

        <styled.ButtonWrapper>
          <CustomButton
            height='2rem'
            onClick={() => jumpTo('/profile/', props.observedUserData.shareableId)}
          >
            Открыть
          </CustomButton>
        </styled.ButtonWrapper>
      </styled.ContentWrapper>
    </styled.ObservedProfileBadge>
  );
}

export default memo(ObservedProfileBadge);
