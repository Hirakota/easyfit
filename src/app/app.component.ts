import {Component} from '@angular/core';
import {StoreService} from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diplomDev';

  constructor(private storeService: StoreService) {
    const toDay = [new Date().getDate(), new Date().getMonth(), new Date().getFullYear()];

    if (storeService.getAllDailyActivity()) {
      let lastActiivtyDay = storeService.getAllDailyActivity();
      lastActiivtyDay = lastActiivtyDay[lastActiivtyDay.length - 1].planDate;

      if (lastActiivtyDay.join() !== toDay.join()) {
        storeService.clearDailyActivity();
      }
    }

    if (storeService.getAllDailyPlans()) {
      let lastPlan = storeService.getAllDailyPlans();
      lastPlan = lastPlan[lastPlan.length - 1].planDate;

      if (lastPlan.join() !== toDay.join()) {
        storeService.clearDailyPlan();
      }
    }
  }

}
