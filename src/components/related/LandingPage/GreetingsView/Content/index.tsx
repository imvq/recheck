import withStyles from 'react-css-modules';

import GreetingsContentPic from 'assets/images/GreetingsContentPic.png';
import SearchButton from './SearchButtonGroup';

import styles from './styles.module.scss';

/**
 * Wrapper for greetings view's content.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='Content'>
    <img styleName='Content__Pic' src={GreetingsContentPic} alt='' />
    <div styleName='Content__InteractionGroup'>
      <p styleName='Content__CallToAction'>
        Найди отзывы о кандидате с прошлых мест работы
      </p>
      <div>
        <SearchButton />
      </div>
    </div>
  </div>
), styles);
