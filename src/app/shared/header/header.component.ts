import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private storeService: StoreService) {

  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  haveDailyRation(): boolean {
    return !!this.storeService.getDailyRatio();
  }

  hasDisplayed(): boolean {
    return this.innerWidth <= 960;
  }

}
