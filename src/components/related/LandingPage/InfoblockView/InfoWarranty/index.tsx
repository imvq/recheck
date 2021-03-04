import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='InfoWarranty'>
    <div styleName='InfoWarranty__BoardWrapper'>
      <div styleName='InfoWarranty__Board'>
        <div styleName='InfoWarranty__ParagraphWrapper'>
          <div styleName='InfoWarranty__TitleWrapper'>
            <h1 styleName='InfoWarranty__Title'>
              <span>
                Будьте уверены, что отзыв
                был оставлен человеком с
                прошлого места работы.
              </span>
            </h1>
          </div>
          <p styleName='InfoWarranty__Text'>
            Кандидат не сможет дать
            неправильный контакт.
          </p>
        </div>
      </div>
    </div>
  </div>
), styles);
