/* eslint-disable import/no-anonymous-default-export */
import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: '«The best in the industry 2023»',
    subtitle: 'Профессиональная премия заслуженным деятелям ресторанного бизнеса России.',
  },
  {
    imgUrl: images.award01,
    title: '«Guest Choice 2022»',
    subtitle: 'Альтернативный экспертному выбор лучшей ресторанной концепции года.',
  },
  {
    imgUrl: images.award05,
    title: '«Wheretoeat Russia 2023»',
    subtitle: 'Национальная ресторанная премия.',
  },
  {
    imgUrl: images.award03,
    title: '«Interior of the year 2018»',
    subtitle: 'Лучшие интерьеры ресторанов.',
  },
];

export default { wines, cocktails, awards };