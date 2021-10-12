import home from '../images/home.svg'
import family from '../images/users.svg'
import job from '../images/briefcase.svg'
import sport from '../images/zap.svg'

export const prependCategory = [
  {
    title: 'Дом',
    categoryCode: 'Дом',
    image: home,
    isActive: true,
    _id: 0
  },
  {
    title: 'Семья',
    categoryCode: 'Семья',
    image: family,
    isActive: false,
    _id: 1
  },
  {
    title: 'Работа',
    categoryCode: 'Работа',
    image: job,
    isActive: false,
    _id: 2
  },
  {
    title: 'Спорт',
    categoryCode: 'Спорт',
    image: sport,
    isActive: false,
    _id: 3
  },
];

export const prependTasks = [
  {
    title: 'test0',
    category: 'Дом',
    isComplete: false,
    _id: 0
  },
  {
    title: 'test1',
    category: 'Дом',
    isComplete: true,
    _id: 1
  },
  {
    title: 'test2',
    category: 'Дом',
    isComplete: false,
    _id: 2
  },
  {
    title: 'test3',
    category: 'Спорт',
    isComplete: false,
    _id: 3
  },
  {
    title: 'test4',
    category: 'Работа',
    isComplete: false,
    _id: 4
  },
  {
    title: 'test5',
    category: 'Семья',
    isComplete: false,
    _id: 5
  },
]