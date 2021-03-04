import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='InfoEasement'>
    <div styleName='InfoEasement__BoardWrapper'>
      <div styleName='InfoEasement__Board'>
        <div styleName='InfoEasement__ParagraphWrapper'>
          <div styleName='InfoEasement__TitleWrapper'>
            <h1 styleName='InfoEasement__Title'>
              <span>
                Можно проверять кадидата
                ещё до того, как он придёт
                на собеседование.
              </span>
            </h1>
          </div>
          <p styleName='InfoEasement__Text'>
            Теперь не обязательно ждать
            финальное собеседование,
            чтобы получить рекомендацию.
          </p>
        </div>
      </div>
    </div>
  </div>
), styles);
