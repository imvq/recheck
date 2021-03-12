import withStyles from 'react-css-modules';

import { ReactComponent as FindButton } from 'assets/svg/btn/FindCandidate.svg';
import PhoneImage from 'assets/images/misc/Phone.png';
import TitleView from './TitleView';
import Badge from './Badge';
import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='MotivatorView'>
    <TitleView />
    <div styleName='MotivatorView__FocusView'>
      <div styleName='MotivatorView__Anchor'>
        <div styleName='MotivatorView__MotivationBadgeWrapper'>
          <Badge text='Проверяйте отзывы о кандидате с прошлого места работы.' />
        </div>
        <div styleName='MotivatorView__MotivationBadgeWrapper'>
          <Badge text='Нанимайте подходящих кандидатов.' />
        </div>
        <div styleName='MotivatorView__MotivationBadgeWrapper'>
          <Badge text='Обменивайтесь отзывами о своих сотрудниках.' />
        </div>
      </div>
      <div styleName='MotivatorView__Anchor--sticky'>
        <img styleName='MotivatorView__PhoneImage' src={PhoneImage} alt='' />
        <FindButton styleName='MotivatorView__Button' />
      </div>
    </div>
  </div>
), styles);
