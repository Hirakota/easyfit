import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export enum DATA_NAME {
  DAILY_RATIO = 'dailyRatio',
  DAILY_PLAN = 'dailyPlan',
  ALL_DAILY_PLANS = 'allDailyPlans',
  DAILY_ACTIVITY = 'dailyActivity',
  ALL_DAILY_ACITIVITIES = 'allDailyActivities',
  USER_WEIGHT = 'userWeight'
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  detectChanges = new Subject<boolean>();

  constructor() {
  }

  // USER WEIGHT
  public setUserWeight(value): void {
    localStorage.setItem(DATA_NAME.USER_WEIGHT, JSON.stringify(value));
  }

  public getUserWeight(): number {
    return JSON.parse(localStorage.getItem(DATA_NAME.USER_WEIGHT));
  }

  // DailyRatio
  public setDailyRatio(dailyRatio: any): void {
    localStorage.setItem(DATA_NAME.DAILY_RATIO, JSON.stringify(dailyRatio));
  }

  public getDailyRatio(): any {
    return JSON.parse(localStorage.getItem(DATA_NAME.DAILY_RATIO));
  }

  // ------ DailyPlan
  public setDailyPlan(dailyPlan: any | any[]): void {
    let todayPlan;

    if (this.getDailyPlan()) {
      todayPlan = this.getDailyPlan();
      todayPlan.push(dailyPlan);
    } else {
      todayPlan = [dailyPlan];
    }

    localStorage.setItem(DATA_NAME.DAILY_PLAN, JSON.stringify(todayPlan));
    this.setAllDailyPlans(this.getDailyPlan());
  }

  public getDailyPlan(): any | any[] {
    return JSON.parse(localStorage.getItem(DATA_NAME.DAILY_PLAN));
  }

  public clearDailyPlan(): void {
    localStorage.removeItem(DATA_NAME.DAILY_PLAN);
  }

  // AllDailyPlans
  public setAllDailyPlans(allDailyPlans: any | any[]): void {
    const date = new Date();
    const today: number[] = [date.getDate(), date.getMonth(), date.getFullYear()];
    const newDailyPlan = {
      planDate: today,
      dailyPlan: allDailyPlans
    };

    if (this.getAllDailyPlans()) {
      let allPlans = this.getAllDailyPlans();
      if (allPlans[allPlans.length - 1].planDate.join() === today.join()) {
        allPlans[allPlans.length - 1] = newDailyPlan;
      } else {
        allPlans.push(newDailyPlan);
      }
      localStorage.setItem(DATA_NAME.ALL_DAILY_PLANS, JSON.stringify(allPlans));
      return;
    } else {
      localStorage.setItem(DATA_NAME.ALL_DAILY_PLANS, JSON.stringify([newDailyPlan]));
      return;
    }
  }

  public getAllDailyPlans(): any {
    return JSON.parse(localStorage.getItem(DATA_NAME.ALL_DAILY_PLANS));
  }

  // ------ DailyActivity
  public setDailyActivity(dailyActivity: any | any[]): void {
    let todayBurn;

    if (this.getDailyActivity()) {
      todayBurn = this.getDailyActivity();
      todayBurn.push(dailyActivity);
    } else {
      todayBurn = [dailyActivity];
    }

    localStorage.setItem(DATA_NAME.DAILY_ACTIVITY, JSON.stringify(todayBurn));
    this.setAllDailyActivity(this.getDailyActivity());
  }

  public getDailyActivity(): any {
    return JSON.parse(localStorage.getItem(DATA_NAME.DAILY_ACTIVITY));
  }

  public clearDailyActivity(): any {
    localStorage.removeItem(DATA_NAME.DAILY_ACTIVITY);
  }

  // AllTimeDailyActivity
  public setAllDailyActivity(allDailyActivities: any | any[]): void {
    const date = new Date();
    const today: number[] = [date.getDate(), date.getMonth(), date.getFullYear()];
    const newDailyActivity = {
      planDate: today,
      dailyPlan: allDailyActivities
    };

    if (this.getAllDailyActivity()) {
      let allBurns = this.getAllDailyActivity();
      if (allBurns[allBurns.length - 1].planDate.join() === today.join()) {
        allBurns[allBurns.length - 1] = newDailyActivity;
      } else {
        allBurns.push(newDailyActivity);
      }
      localStorage.setItem(DATA_NAME.ALL_DAILY_ACITIVITIES, JSON.stringify(allBurns));
      return;
    } else {
      localStorage.setItem(DATA_NAME.ALL_DAILY_ACITIVITIES, JSON.stringify([newDailyActivity]));
      return;
    }
  }

  public getAllDailyActivity(): any {
    return JSON.parse(localStorage.getItem(DATA_NAME.ALL_DAILY_ACITIVITIES));
  }
}
