import { memo, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdContentCopy } from 'react-icons/md';
import { connect } from 'react-redux';

import * as styledFormBase from 'components/shared/BoxBase';
import * as store from 'store';

import cssVars from 'commons/styles/cssVars';
import ContentSubareaDelimiter from 'components/shared/ContentSubareaDelimiter';
import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styledLocal from './styled';
import * as misc from './misc';

const styled = { ...styledFormBase, ...styledLocal };

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  shareableId: store.getCurrentShareableId(state)
});

function InviteForm(props: types.IProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <styled.InviteFormBadge>
      <styled.BadgeWrapper>
        <span>{props.reviewFormData.name}</span>
        <styled.ControlsWrapper>
          <MdContentCopy
            onClick={() => misc.copyInviteLink(props.shareableId as string)}
            size={15}
            color={cssVars.colorForegroundPickAux1}
          />
          {isExpanded && (
            <IoIosArrowUp
              onClick={() => setIsExpanded(false)}
              size={17}
              color={cssVars.colorForegroundPickAux1}
            />
          )}
          {!isExpanded && (
            <IoIosArrowDown
              onClick={() => setIsExpanded(true)}
              size={17}
              color={cssVars.colorForegroundPickAux1}
            />
          )}
        </styled.ControlsWrapper>
      </styled.BadgeWrapper>

      {isExpanded && (
        <styled.FormPreview>
          {/* TODO: Make the structure flexile. */}

          <ContentSubareaDelimiter half />

          <styled.Warn>
            <strong>Комментрий для кандидата: </strong>
            <span>
              Для подтверждения Ваших мест работы отправьте ссылке
              с опросником 2-м коллегам, например, с текущей и прошлой компании. После заполнения
              данных и подтверждения их мест работы данные из опросника будут доступны для просмотра
              в Вашем профиле.
            </span>
          </styled.Warn>

          <ContentSubareaDelimiter half />

          <styled.Subtitle isReduced>
            1. Укажите название компании и позицию, которую занимал(-а) кандидат.
          </styled.Subtitle>

          <ContentSubareaDelimiter quarter />

          <styled.InputRowWrapper>
            <styled.Input disabled placeholder='Название компании' />
          </styled.InputRowWrapper>

          <ContentSubareaDelimiter quarter />

          <styled.InputRowWrapper>
            <styled.Input disabled placeholder='Позиция, которую занимал кандидат' />
          </styled.InputRowWrapper>

          <ContentSubareaDelimiter half />

          <styled.Subtitle isReduced>
            2. Укажите даты работы кандидата в этой компании:
          </styled.Subtitle>

          <ContentSubareaDelimiter quarter />

          <styled.InputRowWrapper>
            <styled.SimpleText>Дата начала работы:</styled.SimpleText>
          </styled.InputRowWrapper>

          <ContentSubareaDelimiter quarter />

          <styled.InputRowWrapper>
            <styled.Input disabled placeholder='Месяц' />
            <styled.Input disabled placeholder='Год' />
          </styled.InputRowWrapper>

          <ContentSubareaDelimiter quarter />

          <styled.InputRowWrapper>
            <styled.SimpleText>Дата окончания работы:</styled.SimpleText>
          </styled.InputRowWrapper>

          <ContentSubareaDelimiter quarter />

          <styled.InputRowWrapper>
            <styled.Input disabled placeholder='Месяц' />
            <styled.Input disabled placeholder='Год' />
          </styled.InputRowWrapper>

          <ContentSubareaDelimiter half />

          <styled.Subtitle isReduced>
            3. Назовите три основных задачи, которые выполнял(-а) кандидат на этой позиции?
          </styled.Subtitle>

          <ContentSubareaDelimiter quarter />

          <styled.InputRowWrapper>
            <styled.TextArea disabled placeholder='Прокомментируйте свой ответ' isReduced />
          </styled.InputRowWrapper>

          <ContentSubareaDelimiter half />

          <styled.Subtitle isReduced>
            4. Оцените, насколько кандидат справился
            с поставленными задачами? (От 1 до 10).  Напишите результат, которого получилось достичь
            при выполнении этих задач?
          </styled.Subtitle>

          <ContentSubareaDelimiter quarter />

          <styled.InputRowWrapper>
            <styled.TextArea disabled placeholder='Прокомментируйте свой ответ' isReduced />
          </styled.InputRowWrapper>

          <ContentSubareaDelimiter quarter />

          <styled.Subtitle isReduced>
            5. Что можно было бы улучшить в работе кандидата, чтобы достичь лучшего результата?
          </styled.Subtitle>

          <ContentSubareaDelimiter quarter />

          <styled.InputRowWrapper>
            <styled.TextArea disabled placeholder='Прокомментируйте свой ответ' isReduced />
          </styled.InputRowWrapper>

          <ContentSubareaDelimiter half />

          <styled.ButtonGroupWrapper>
            <CustomButton onClick={() => misc.copyInviteLink(props.shareableId as string)}>
              Пригласить кандидата
            </CustomButton>
          </styled.ButtonGroupWrapper>
        </styled.FormPreview>
      )}
    </styled.InviteFormBadge>
  );
}

export default connect(mapStateToProps)(memo(InviteForm));
