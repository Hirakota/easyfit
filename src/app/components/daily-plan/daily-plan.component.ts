import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-daily-plan',
  templateUrl: './daily-plan.component.html',
  styleUrls: ['./daily-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyPlanComponent implements OnInit {

  dailyPlans;

  constructor(private storeService: StoreService, private cdr: ChangeDetectorRef) {
    this.dailyPlans = storeService.getDailyPlan();
    storeService.detectChanges.subscribe((value) => {
      this.dailyPlans = storeService.getDailyPlan();
      cdr.detectChanges();
    });
  }

  ngOnInit(): void {
  }

  getSum(index: number): number {
    const sum = this.dailyPlans[index].reduce((acc, cur) => acc + cur.energyValue, 0);
    return sum;
  }
  allSum(): number {
    let sum = 0;
    this.dailyPlans.forEach(plan => {
      sum += plan.reduce((acc, cur) => acc + cur.energyValue, 0);
    });

    return sum;
  }

  haveDailyData(): boolean {
    return !!this.storeService.getDailyPlan();
  }
}
