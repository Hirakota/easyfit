import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivityType} from '../../entities/all.entites';
import {ACTIVITIES} from '../../store/activity.data';
import {StoreService} from '../../services/store.service';

interface Activity {
  activityType: FormControl;
  spendtTime: FormControl;
  result: number;
}

@Component({
  selector: 'app-burn-calc',
  templateUrl: './burn-calc.component.html',
  styleUrls: ['./burn-calc.component.scss']
})
export class BurnCalcComponent implements OnInit {
  activityList: Activity[] = [];
  activities: ActivityType[];
  userWeight: number;

  sumOf: number;

  innerWidth: any = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private storeService: StoreService) {
    this.userWeight = storeService.getUserWeight();
    console.log(this.userWeight);
    this.sumOf = 0;
  }

  ngOnInit(): void {
    this.activities = ACTIVITIES;
  }

  addNewRow(): void {
    this.activityList.push({
      activityType: new FormControl(),
      spendtTime: new FormControl({value: null, disabled: true}),
      result: 0
    });

    this.addSubscriptionToRow(this.activityList?.[this.activityList.length - 1]);
  }

  deleteRow(index: number): void {
    this.sumOf -= this.activityList[index].result;
    this.activityList.splice(index, 1);
  }

  addSubscriptionToRow(row: Activity): void {
    if (row) {
      row.activityType.valueChanges.subscribe((value) => {
        if (row.spendtTime?.value) {
          row.result = this.userWeight * value.burn * (row.spendtTime.value / 60);
        }
      });
      row.spendtTime.valueChanges.subscribe((value) => {
        row.result = this.userWeight * row.activityType?.value?.burn * (value / 60);
        this.sumOf = this.activityList.reduce((acc, cur) => acc + cur.result, 0);
      });
    }
  }

  saveActivity(): void {
    let toSave = [];

    this.activityList.forEach((activity) =>
      toSave.push({
        activityType: activity.activityType.value,
        spendtTime: activity.spendtTime.value,
        result: activity.result,
      })
    );

    this.storeService.setDailyActivity(toSave);

    this.activityList = [];
  }
}
