import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='Wrapper'>
    <button styleName='Tab' type='button'>Поиск</button>
    <button styleName='Tab' type='button'>О платформе</button>
    <button styleName='Tab' type='button'>Отзывы</button>
  </div>
), styles);
