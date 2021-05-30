import {FormControl} from '@angular/forms';

export interface FoodCategory {
  type: string;
  list: FoodInfo[];
}

export interface FoodInfo {
  name: string;
  energyValue: number;
}

export interface FoodList {
  type: string;
  name: string;
  weight: number;
  energyValue: number;
}

export interface ActivityType {
  id: number;
  name: string;
  burn: number;
}
