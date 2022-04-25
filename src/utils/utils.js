export const categories = [
  { name: 'Жидкости', link: '/liquid' },
  { name: 'Одноразки', link: '/disposable' },
  { name: 'Поды', link: '/pod' },
  { name: 'Картриджи', link: '/cartridge' },
  { name: 'Испарители', link: 'evaporator' },
];

export const colors = shop => {
  return shop < 1
    ? []
    : shop >= 1 && shop <= 3
    ? ['#BD1616']
    : shop >= 4 && shop <= 5
    ? ['#BD8E16', '#BD8E16']
    : shop >= 6 && shop <= 9
    ? ['#9CBD16', '#9CBD16', '#9CBD16']
    : ['#23BD16', '#23BD16', '#23BD16', '#23BD16'];
};
