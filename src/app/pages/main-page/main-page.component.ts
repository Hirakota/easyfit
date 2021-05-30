import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  }

  haveDailyRation(): boolean {
    return !!this.storeService.getDailyRatio();
  }
}
