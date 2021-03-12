import withStyles from 'react-css-modules';

import TitleView from './TitleView';
import Badge from './Badge';
import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='MotivatorView'>
    <TitleView />
    <Badge text='Проверяйте отзывы о кандидате с прошлого места работы.' />
  </div>
), styles);
