/**
 * Small helper functions.
 */

import { toast } from 'react-toastify';

import { ISearchedProfile, IReviewParsed } from 'commons/types';
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
  currentCompanyName: 'reCheck',
  currentPosition: 'Team Lead of Data Analysts team',
  fullName: 'Екатерина Мазур',
  photoUrl: `${process.env.REACT_APP_MEDIA_URL}/user-test.png`,
  shareableId: 'user-demo'
});

export const getDemoReview = (): IReviewParsed => ({
  date: '2022-01-18 08:48:08.852658',
  questions: [
    'Какие задачи выполнял кандидат?',
    'Опишите сильные стороны кандидата.',
    'Какие компетенции и навыки необходимо улучшить?',
    'Какие цели были поставлены перед кандидатом на работе? Были ли они выполнены?',
    'Как вы оцениваете уровень знаний и качество работы для должности, на которой был кандидат?',
    'Оцените проактивность кандидата в работе.',
    'Вы бы взяли/рекомендовали этого кандидата на аналогичную работу еще раз?',
    'Способен ли кандидат работать автономно, объективно оценивая необходимое время?',
    'Насколько качественно кандидат выполняет свою работу?',
    'Кто еще может дать отзыв о работе кандидата?'
  ],
  answers: [`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est et lacus fringilla bibendum. Curabitur semper libero et semper interdum. Fusce fermentum ex vestibulum, congue felis ac, consequat risus. Sed rhoncus purus et diam rhoncus congue.
  `],
  marks: [7, 8, 7, 6, 8],
  targetCompanyName: 'reCheck',
  targetPosition: 'Team Lead of Data Analysts team',
  targetName: 'Екатерина Мазур',
  targetPhotoUrl: `${process.env.REACT_APP_MEDIA_URL}/user-test.png`,
  targetShareableId: 'user-demo'
});
