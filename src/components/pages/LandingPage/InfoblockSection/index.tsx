import {
  Wrapper, SubsectionsWrapper, InfoBlockDesktopOnlyWrapper
} from './styled';
import TitleView from './TitleView';
import InfoTimeSave from './InfoTimeSave';
import InfoEasement from './InfoEasement';
import InfoWarranty from './InfoWarranty';

/**
 * Additional info section.
 */
export default () => (
  <Wrapper>
    <TitleView />
    <InfoBlockDesktopOnlyWrapper><InfoTimeSave /></InfoBlockDesktopOnlyWrapper>
    <InfoBlockDesktopOnlyWrapper><InfoEasement /></InfoBlockDesktopOnlyWrapper>
    <InfoBlockDesktopOnlyWrapper><InfoWarranty /></InfoBlockDesktopOnlyWrapper>
    <SubsectionsWrapper>
      <InfoTimeSave />
      <InfoEasement />
      <InfoWarranty />
    </SubsectionsWrapper>
  </Wrapper>
);
