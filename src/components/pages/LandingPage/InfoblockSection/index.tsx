import { Wrapper } from './styled';
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
    <InfoTimeSave />
    <InfoEasement />
    <InfoWarranty />
  </Wrapper>
);
