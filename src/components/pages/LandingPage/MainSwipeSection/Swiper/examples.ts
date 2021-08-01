import * as generalTypes from 'utils/typing/general';

import Lada from 'assets/images/pages/LandingPage/MainSwipeSection/Swiper/Lada.png';
import Kate from 'assets/images/pages/LandingPage/MainSwipeSection/Swiper/Kate.png';
import Ciri from 'assets/images/pages/LandingPage/MainSwipeSection/Swiper/Ciri.png';

const examples: generalTypes.IDemoReviewCardData[] = [
  {
    name: 'Екатерина Мазур',
    photoUrl: Kate,
    position: '--',
    company: '--',
    experience: '--',
    review: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
        `,
    nReviews: 27
  },
  {
    name: 'Лада Клищенко',
    photoUrl: Lada,
    position: 'Team Lead of Data Analyst team',
    company: 'airSlate | workflow Automation',
    experience: 'Июль 2019 — Февраль 2020',
    review: `
        Лада проработала 8 месяцев в airSlate как Team Lead of Data Analyst team.
        Помимо поставленных задач, она взяла на себя разработку автоматизированной
        библиотеки лендингов, вместе с командой они создали более 200 тысяч старниц
        в течение нескольких месяцев. Лада целеустремленный, ответственный и постоянно
        растущий профессионал.
        `,
    nReviews: 27
  },
  {
    name: 'Кирилл Усачёв',
    photoUrl: Ciri,
    position: '--',
    company: '--',
    experience: '--',
    review: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
        `,
    nReviews: 27
  }
];

export default examples;
