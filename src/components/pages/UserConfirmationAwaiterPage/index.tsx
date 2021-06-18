import { connect } from 'react-redux';

import { setPageLocked } from 'store';
import CustomButton from 'components/shared/CustomButton';
import { onExit } from 'utils/functions';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked
};

const UserConfirmationAwaiterPage = (props: types.IProps) => (
  <styled.Wrapper>
    <styled.MainFrame>
      <styled.Text>На вашу почту было отправлено письмо с дальнейшими указаниями.</styled.Text>
      <styled.Text>Пожалуйста, проверьте ваш почтовый ящик.</styled.Text>
      <styled.ButtonWrapper>
        <CustomButton isDisabled={false} isHollow onClick={() => onExit(props.lockPage)}>
          Выйти из учётной записи
        </CustomButton>
      </styled.ButtonWrapper>
    </styled.MainFrame>
  </styled.Wrapper>
);

export default connect(null, mapDispatchToProps)(UserConfirmationAwaiterPage);
