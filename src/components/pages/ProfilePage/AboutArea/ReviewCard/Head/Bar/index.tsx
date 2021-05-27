import { ReviewApprovementStatus } from 'utils/enums';
import { IProps } from './types';
import { Wrapper, MenuEntryWrapper, MenuEntry } from './styled';

/**
 * Head element of the review card.
 */
export default (props: IProps) => (
  <Wrapper status={props.reviewCardData.approved}>
    <MenuEntryWrapper>
      <MenuEntry>
        {(() => {
          switch (props.reviewCardData.approved) {
            case ReviewApprovementStatus.Confirmed:
              return 'Ваш отзыв одобрен!';
            case ReviewApprovementStatus.Rejected:
              return 'Ваш отзыв не одобрен';
            default:
              return 'Ваш отзыв на модерации';
          }
        })()}
      </MenuEntry>
    </MenuEntryWrapper>
  </Wrapper>
);
