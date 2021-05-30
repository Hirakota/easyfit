import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {first} from 'rxjs/operators';
import {Options} from 'highcharts';
import {DATA_NAME, StoreService} from '../../../services/store.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  chart: Chart;
  options: Options;

  constructor(private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    const allActivities = this.storeService.getAllDailyActivity();
    const allPlans = this.storeService.getAllDailyPlans();

    this.options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Статистика'
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title: {
          text: 'В кКал'
        }
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          month: '%d %e',
          year: '%b'
        },
        title: {
          text: 'Дата'
        }
      },
    };

    this.chart = new Chart(this.options);

    if (this.storeService.getAllDailyPlans()) {
      this.chart.addSeries({
        name: 'Съедено',
        type: 'line',
        data: this.getData(),
        color: '#23BF00'
      }, true, true);
    }

    if (this.storeService.getAllDailyActivity()) {
      this.chart.addSeries({
        name: 'Сожжено',
        type: 'line',
        data: this.getData('activity'),
        color: '#C70039',
      }, true, true);
    }
  }

  private getData(type: string = 'plans'): any[] {
    let result = [];
    let data: any[];
    let key: string;

    if (type === 'activity') {
      data = this.storeService.getAllDailyActivity();
      key = 'result';
    } else {
      data = this.storeService.getAllDailyPlans();
      key = 'energyValue';
    }

    data.forEach((dataByDate) => {
      let innerData: any[] = [];
      innerData.push(Date.UTC(dataByDate.planDate[2], dataByDate.planDate[1], dataByDate.planDate[0]));
      let value: number = dataByDate.dailyPlan.reduce((acc, cur) => acc + cur.reduce((innerAcc, innerCur) => innerAcc + innerCur[key], 0), 0);
      innerData.push(Math.round(value));
      result.push(innerData);
    });

    return result;
  }

}
