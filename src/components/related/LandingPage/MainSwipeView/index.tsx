import withStyles from 'react-css-modules';

import Lada from 'assets/images/photos/Lada.png';
import ReviewCard from 'components/common/ReviewCard';
import TitleView from './TitleView';

import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='MainSwipeView'>
    <TitleView />
    <div styleName='MainSwipeView__CardsView'>
      <ReviewCard
        name='Лада Клищенко'
        photoUrl={Lada}
        position='Team Lead of Data Analyst team'
        company='airSlate | workflow Automation'
        experience='Июль 2019 — Февраль 2020'
        review={`
        Лада проработала 8 месяцев в airSlate как Team Lead of Data Analyst team.
        Помимо поставленных задач, она взяла на себя разработку автоматизированной
        библиотеки лендингов, вместе с командой они создали более 200 тысяч старниц
        в течение нескольких месяцев. Лада целеустремленный, ответственный и постоянно
        растущий профессионал.
        `}
        nReviews={27}
      />
    </div>
  </div>
), styles);
