import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='InfoTimeSave'>
    <div styleName='InfoTimeSave__BoardWrapper'>
      <div styleName='InfoTimeSave__Board'>
        <div styleName='InfoTimeSave__ParagraphWrapper'>
          <div styleName='InfoTimeSave__TitleWrapper'>
            <h1 styleName='InfoTimeSave__Title'>
              <span>Экономьте время с </span>
              <span styleName='InfoTimeSave__Title--HighlightedMain'>re</span>
              <span styleName='InfoTimeSaved__Title--HighlightedAux1'>Check</span>
              <span>.</span>
            </h1>
          </div>
          <p styleName='InfoTimeSave__Text'>
            Больше не нужно искать
            прошлых начальников
            кандидата, связываться с ними
            и спрашивать отзыв. Мы уже
            сделали это за вас.
          </p>
        </div>
      </div>
    </div>
  </div>
), styles);
