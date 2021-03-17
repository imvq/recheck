import withStyles from 'react-css-modules';

import { ReactComponent as LogoSVG } from 'assets/svg/logo/LogoFull.svg';
import TelegramIcon from 'assets/images/Footer/TelegramIcon.png';

import styles from './styles.module.scss';

/**
 * The footer.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='Footer'>
    <div styleName='Footer__SectionWrapper'>
      <LogoSVG styleName='Footer__Logo' />
    </div>
    <div styleName='Footer__SectionWrapper'>
      <span styleName='Footer__Text Footer__Text--marked'>Меню:</span>
      <span styleName='Footer__Text'><a href='/'>Процессы</a></span>
      <span styleName='Footer__Text'><a href='/'>О платформе</a></span>
      <span styleName='Footer__Text'><a href='/'>Отзывы</a></span>
    </div>
    <div styleName='Footer__SectionWrapper'>
      <span styleName='Footer__Text Footer__Text--marked'>Почта:</span>
      <span styleName='Footer__Text'>info@recheck-candidate.com</span>
    </div>
    <div styleName='Footer__SectionWrapper'>
      <span styleName='Footer__Text Footer__Text--marked'>Соц. сети:</span>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a styleName='Footer__SocialLink' href='/'>
        <img styleName='Footer__SocialIcon' src={TelegramIcon} alt='' />
      </a>
    </div>
    <div styleName='Footer__EmptyWrapper' />
  </div>
), styles, { allowMultiple: true });
