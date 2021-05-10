import { connect } from 'react-redux';

import { setPageLocked } from 'store';
import CustomButton from 'components/shared/CustomButton';
import { onExit } from 'utils/functions';
import { IProps, IDispatchProps } from './types';
import { Wrapper, MainFrame, Text, ButtonWrapper } from './styled';

const mapDispatchToProps: IDispatchProps = {
  lockPage: setPageLocked
};

const UserConfirmationAwaiterPage = (props: IProps) => (
  <Wrapper>
    <MainFrame>
      <Text>На вашу почту было отправлено письмо с дальнейшими указаниями.</Text>
      <Text>Пожалуйста, проверьте ваш почтовый ящик.</Text>
      <ButtonWrapper>
        <CustomButton isDisabled={false} isHollow onClick={() => onExit(props.lockPage)}>
          Выйти из учётной записи
        </CustomButton>
      </ButtonWrapper>
    </MainFrame>
  </Wrapper>
);

export default connect(null, mapDispatchToProps)(UserConfirmationAwaiterPage);
