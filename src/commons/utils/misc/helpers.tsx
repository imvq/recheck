/**
 * Small helper functions.
 */

import { toast } from 'react-toastify';

import { ISearchedProfile, ISelectOptionType, IReviewReceived } from 'commons/types';
import { ScreenBreakpoint, toastVariants } from 'commons/types/unions';

export const months: ISelectOptionType[] = [
  { key: 0, text: 'Январь' },
  { key: 1, text: 'Февраль' },
  { key: 2, text: 'Март' },
  { key: 3, text: 'Апрель' },
  { key: 4, text: 'Май' },
  { key: 5, text: 'Июнь' },
  { key: 6, text: 'Июль' },
  { key: 7, text: 'Август' },
  { key: 8, text: 'Сентябрь' },
  { key: 9, text: 'Октябрь' },
  { key: 10, text: 'Ноябрь' },
  { key: 11, text: 'Декабрь' },
];

export const getMonthName = (month: number | null) => (
  month !== null
    ? months[month]?.text || null
    : null
);

export function getAvailableYears(minYear: number | null) {
  if (minYear === null) return [];

  const currentDate = new Date();
  const yearsDiff = currentDate.getFullYear() - minYear + 1;
  return years.slice(0, yearsDiff);
}

export function getAvailableMonths(
  year: number | null, minYear?: number | null, minMonth?: number | null
) {
  if (year === null) return [];

  const currentDate = new Date();

  if (year === minYear && year === currentDate.getFullYear()) {
    return months.slice(Math.min(currentDate.getMonth(), minMonth!));
  }

  if (year === minYear) {
    return months.slice(minMonth!);
  }

  return year === currentDate.getFullYear() ? months.slice(0, currentDate.getMonth() + 1) : months;
}

// 50 years till current year.
const yearsDown = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

// Optionified years array.
export const years = yearsDown.map((value, index) => ({ key: index, text: value.toString() }));

export function monthHandler(option: ISelectOptionType, callback: (month: number) => void) {
  callback(option.key);
}

export function yearHandler(option: ISelectOptionType, callback: (year: number) => void) {
  callback(Number.parseInt(option.text));
}

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
