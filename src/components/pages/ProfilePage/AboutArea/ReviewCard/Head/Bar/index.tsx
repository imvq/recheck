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
              return 'Отзыв одобрен!';
            case ReviewApprovementStatus.Rejected:
              return 'Отзыв не одобрен';
            default:
              return 'Отзыв на модерации';
          }
        })()}
      </MenuEntry>
    </MenuEntryWrapper>
  </Wrapper>
);
