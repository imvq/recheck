import * as generalTypes from 'commons/types/general';

import Natalie from 'assets/images/pages/LandingPage/MainSwipeSection/Swiper/Natalie.png';
import Oleg from 'assets/images/pages/LandingPage/MainSwipeSection/Swiper/Oleg.png';
import Andrey from 'assets/images/pages/LandingPage/MainSwipeSection/Swiper/Andrey.png';

const examples: generalTypes.IDemoReviewCardData[] = [
  {
    name: 'Oleg Bagisky',
    photoUrl: Oleg,
    position: 'JS Developer',
    company: 'DAXX',
    review: `
        Я работал с Олегом на общем проекте как тестировщик. Могу сказать, что работа
        всегда выполнялась качественно и в срок, никогда не было проблем в общении,
        Олег часто предлагал новые идеи и мы вместе быстро закрывали задачи.
        По бизнес части у проджекта также не было вопросов, всё всегда было на высоте.
        `,
    nReviews: 3
  },
  {
    name: 'Andrey Sergeev',
    photoUrl: Andrey,
    position: 'Head of Sales Department',
    company: 'P&G Ukraine',
    review: `
        Я работала с Андреем на должности заместителя управляющего директора P&G Ukraine.
        Начав в качестве стажера, он отлично вписался в команду по обслуживанию клиентов,
        быстро приобрел необходимый опыт и продемонстрировал хороший прогресс в управленческих
        навыках, что позволило ему продолжить свою карьеру в качестве менеджера по работе с
        клиентами в агентстве. Обладая трудолюбием и энтузиазмом, Андрей стал ценным активом
        для компании. Он мог вести переговоры и повседневное общение с командами клиентов.
        Очень рекомендую Андрея как умелого руководителя и прилежного владельца проекта.
        `,
    nReviews: 8
  },
  {
    name: 'Natalya Morenko',
    photoUrl: Natalie,
    position: 'Recruiter',
    company: 'NIX',
    review: `
        Мне было приятно работать с Наталией во время моего найма в компанию.
        Наталья — высококвалифицированный специалист. С первого разговора я понял,
        что она понимает все технические нюансы моей профессии (Product Analytics), поэтому
        общаться было легко. Наталья поддерживала меня на протяжении всего моего
        трудоустройства. Я всегда получал ответы на все вопросы.
        `,
    nReviews: 5
  }
];

export default examples;
