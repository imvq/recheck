/**
 * Small helper functions.
 */

import { toast } from 'react-toastify';

import { ISearchedProfile, IReviewReceived } from 'commons/types';
import { ScreenBreakpoint, toastVariants } from 'commons/types/unions';

export function onExit(lockPageCallback: () => void) {
  lockPageCallback();
  localStorage.removeItem('accessToken');
  window.location.replace(window.location.origin);
}

export const respond = (screen: ScreenBreakpoint) => `@media (max-width: ${screen}px)`;

export const respondUp = (screen: ScreenBreakpoint) => `@media (min-width: ${screen}px)`;

export const showToast = (text: string, variant = toastVariants.Success) => toast.dark(text, {
  style: { width: '100%', backgroundColor: variant, textAlign: 'center', fontSize: '1.3rem' },
  position: 'bottom-left',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  closeButton: false
});

export const showInsignificantToast = (text: string) => toast.dark(text, {
  style: { width: '100%', backgroundColor: '#3a3a3ac1', textAlign: 'center', fontSize: '1.3rem' },
  position: 'bottom-left',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  closeButton: false
});

export const getDemoObservedUser = (): ISearchedProfile => ({
  currentCompanyId: -1,
  currentCompanyName: 'Kingcross',
  currentPosition: 'Designer',
  fullName: 'Екатерина Мазур',
  photoUrl: `${process.env.REACT_APP_MEDIA_URL}/user-test.png`,
  shareableId: 'user-demo'
});

export const getDemoReview = (): IReviewReceived => ({
  authorCompany: 'Ringostat',
  authorPosition: 'Head of Design',
  authorEmail: 'r*****@ringostat.com',
  targetCompanyName: 'Kingcross',
  targetPosition: 'Designer',
  targetName: 'Екатерина Мазур',
  targetPhotoUrl: `${process.env.REACT_APP_MEDIA_URL}/user-test.png`,
  targetShareableId: 'user-demo',
  date: '2022-01-18 08:48:08.852658',
  content: JSON.stringify({
    questions: [
      'Укажите название компании и позицию, которую занимал(-а) кандидат',
      'Укажите даты работы кандидата в этой компании',
      'Назовите три основных задачи, которые выполнял(-а) кандидат на этой позиции',
      `Оцените, насколько кандидат справился с поставленными задачами?
      Напишите результат, которого получилось достичь при выполнении этих задач?`,
      'Что можно было бы улучшить в работе кандидата, чтобы достичь лучшего результата?'
    ],
    answers: [
      'Kingcross, Designer',
      `Начало работы: Ноябрь 2019
      Окончание работы: текущее место работы кандидата`,
      `1) Создание дизайн системы.
      2) Создание прототипов и дизайна для основного мобильного приложения компании.
      3) Пользовательские интервью и коридорные тесты прототипов фичей.`,
      `В продукт была внедрена дизайн система, которая используется до сих пор.
      Был сделан функционал оставления отзывов в мобильном приложении.`,
      'Больше системного подхода и документирования гипотез и тестов.'
    ],
    marks: [null, null, null, 9, null]
  })
});
