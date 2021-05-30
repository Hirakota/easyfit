import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../../services/store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  target: any;
  dailyCount: any;
  dailyBurn: any;
  allTimeCount: any;
  allTimeBurn: any;

  constructor(private storeService: StoreService) {
    this.target = storeService.getDailyRatio();

    if (storeService.getDailyPlan()) {
      this.dailyCount = storeService.getDailyPlan();
      this.dailyCount = this.dailyCount
        .reduce((acc, cur) => acc + cur.reduce((innerAcc, innerCur) => innerAcc + innerCur.energyValue, 0), 0);
    } else {
      this.dailyCount = 0;
    }

    if (storeService.getDailyActivity()) {
      this.dailyBurn = storeService.getDailyActivity();
      this.dailyBurn = this.dailyBurn.reduce((acc, cur) => acc + cur.reduce((innerAcc, innerCur) => innerAcc + innerCur.result, 0), 0);
    } else {
      this.dailyBurn = 0;
    }

    if (storeService.getAllDailyPlans()) {
      this.allTimeCount = storeService.getAllDailyPlans();
      this.allTimeCount = this.allTimeCount
        .reduce((acc, cur) => acc + cur.dailyPlan
            .reduce((innerAcc, innerCur) => innerAcc + innerCur
                .reduce((innerInAcc, innerInCur) =>
                  innerInAcc + innerInCur.energyValue
                  , 0)
              , 0)
          , 0);
    } else {
      this.allTimeCount = 0;
    }

    if (storeService.getAllDailyActivity()) {
      this.allTimeBurn = storeService.getAllDailyActivity();
      this.allTimeBurn = this.allTimeBurn
        .reduce((acc, cur) => acc + cur.dailyPlan
            .reduce((innerAcc, innerCur) => innerAcc + innerCur
                .reduce((innerInAcc, innerInCur) =>
                  innerInAcc + innerInCur.result
                  , 0)
              , 0)
          , 0);
    } else {
      this.allTimeBurn = 0;
    }
  }

  ngOnInit(): void {
  }

}
