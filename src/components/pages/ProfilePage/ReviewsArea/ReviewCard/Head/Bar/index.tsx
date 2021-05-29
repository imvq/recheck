import { ReviewApprovementStatus } from 'utils/enums';
import { IProps } from './types';
import { Wrapper, MenuEntryWrapper, MenuEntry } from './styled';

/**
 * Head element of the review card.
 */
export default (props: IProps) => (
  <Wrapper status={props.reviewCardData.approved}>
    <MenuEntryWrapper>
      <MenuEntry>{props.reviewCardData.targetPredefinedName}</MenuEntry>
    </MenuEntryWrapper>
    <MenuEntryWrapper>
      <MenuEntry>
        {(() => {
          switch (props.reviewCardData.approved) {
            case ReviewApprovementStatus.Confirmed:
              return 'Одобренный отзыв';
            case ReviewApprovementStatus.Rejected:
              return 'Отзыв отклонён при модерации';
            default:
              return 'Отзыв на модерации';
          }
        })()}
      </MenuEntry>
    </MenuEntryWrapper>
  </Wrapper>
);
