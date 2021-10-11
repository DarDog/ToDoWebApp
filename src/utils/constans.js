import home from '../images/home.svg'
import family from '../images/users.svg'
import job from '../images/briefcase.svg'
import sport from '../images/zap.svg'

export const prependCategory = [
  {
    title: 'Дом',
    className: 'Дом',
    image: home,
    isActive: true,
    _id: 0
  },
  {
    title: 'Семья',
    className: 'Семья',
    image: family,
    isActive: false,
    _id: 1
  },
  {
    title: 'Работа',
    className: 'Работа',
    image: job,
    isActive: false,
    _id: 2
  },
  {
    title: 'Спорт',
    className: 'Спорт',
    image: sport,
    isActive: false,
    _id: 3
  },
];