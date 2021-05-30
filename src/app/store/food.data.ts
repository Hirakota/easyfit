import {FoodCategory} from '../entities/all.entites';

export const FOODCATEGORIES: FoodCategory[] = [
  {
    type: 'Крупа',
    list: [
      {name: 'Рис вареный', energyValue: 200},
      {name: 'Гречка', energyValue: 170}
    ]
  },
  {
    type: 'Напитки',
    list: [
      {name: 'Кола', energyValue: 440},
      {name: 'Минералка', energyValue: 20}
    ]
  }
];
